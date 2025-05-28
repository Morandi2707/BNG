// add-zh.cjs

const fs    = require('fs-extra');
const path  = require('path');

// Endpoint público do LibreTranslate
const API_URL = 'https://libretranslate.de/translate';

async function traduzir(texto) {
  // detecta se já está em pt ou cai em en
  const source = /^[A-Za-z0-9 .,!?'"()\-:;]+$/.test(texto) ? 'pt' : 'pt';
  const body = {
    q: texto,
    source: source,
    target: 'zh',
    format: 'text'
  };
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`LibreTranslate retornou ${res.status}`);
  const json = await res.json();
  return json.translatedText;
}

async function main() {
  const inFile  = path.resolve(process.cwd(), 'src/contexts/LanguageContext.tsx');
  const outFile = path.resolve(process.cwd(), 'src/contexts/LanguageContext.zh.tsx');

  // 1) Leia TSX
  const tsx = await fs.readFile(inFile, 'utf-8');

  // 2) Capture o objeto TRANSLATIONS
  const re = /export const TRANSLATIONS\s*:\s*Translations\s*=\s*({[\s\S]*?});/;
  const match = tsx.match(re);
  if (!match) {
    console.error('❌ Não achei TRANSLATIONS em', inFile);
    process.exit(1);
  }

  // 3) Parse seguro do literal
  const objText = match[1];
  // como são só literais JS (sem funções), podemos usar eval()
  const TRANSLATIONS = eval(`(${objText})`);

  // 4) Percorra cada chave
  for (const [key, entry] of Object.entries(TRANSLATIONS)) {
    if (entry.zh) continue;
    const ptEn = entry.pt || entry.en;
    try {
      const zh = await traduzir(ptEn);
      entry.zh = zh;
      console.log(`✅ ${key}: “${ptEn}” → “${zh}”`);
    } catch (err) {
      console.warn(`❌ falha em ${key}, fallback para PT/EN`);
      entry.zh = ptEn;
    }
    // pausa para não sobrecarregar
    await new Promise(r => setTimeout(r, 300));
  }

  // 5) Reinsira no TSX original
  const newBlock = `export const TRANSLATIONS: Translations = ${JSON.stringify(TRANSLATIONS, null, 2)};`;
  const output = tsx.replace(re, newBlock);

  // 6) Escreva o novo arquivo
  await fs.writeFile(outFile, output, 'utf-8');
  console.log(`\n🎉 Pronto: ${outFile}`);
}

// Node 18+ tem fetch global
main().catch(err => {
  console.error(err);
  process.exit(1);
});

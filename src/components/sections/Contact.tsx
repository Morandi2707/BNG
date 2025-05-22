import React, { useState, useContext } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { LanguageContext } from '../../contexts/LanguageContext';

const Contact = () => {
  const { translate } = useContext(LanguageContext);
  const [data, setData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      console.log(data);
      setSubmitting(false);
      setData({ name: '', email: '', phone: '', message: '' });
      alert(`${translate('contact.form.send')} sucesso!`);
    }, 1500);
  };

  const phones = [
    translate('contact.info.phone1'),
    translate('contact.info.phone2'),
    translate('contact.info.phone3'),
  ];

  const emails = [
    translate('contact.info.email1'),
    translate('contact.info.email2'),
    translate('contact.info.email3'),
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title={translate('contact.title')}
          subtitle={translate('contact.subtitle')}
          className="text-black  mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-black">
              {translate('contact.form.title')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {(['name', 'email', 'phone', 'message'] as const).map(field => (
                <div key={field}>
                  <label htmlFor={field} className="block text-black font-medium mb-2">
                    {translate(`contact.form.${field}`)}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      name={field}
                      rows={5}
                      required
                      value={data[field]}
                      onChange={handleChange}
                      placeholder={translate(`contact.form.placeholder.${field}`)}
                      className="w-full p-3 border rounded focus:ring-2 focus:ring-[#042c70]"
                    />
                  ) : (
                    <input
                      id={field}
                      name={field}
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      required={field !== 'phone'}
                      value={data[field]}
                      onChange={handleChange}
                      placeholder={translate(`contact.form.placeholder.${field}`)}
                      className="w-full p-3 border rounded focus:ring-2 focus:ring-[#042c70]"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center py-3 bg-[#042c70] text-white rounded transition disabled:bg-gray-400"
              >
                {submitting
                  ? translate('contact.form.sending')
                  : (<><Send size={18} className="mr-2" /> {translate('contact.form.send')}</>)
                }
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="flex flex-col">
            <div className="bg-[#042c70] text-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-6">{translate('contact.info.title')}</h3>
              <ul className="space-y-6">
                {/* Endereço */}
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full text-[#042c70] mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">{translate('contact.info.addressLabel')}</div>
                    <div className="whitespace-pre-line">{translate('contact.info.address')}</div>
                  </div>
                </li>
                {/* Telefone */}
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full text-[#042c70] mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">{translate('contact.info.phoneLabel')}</div>
                    <div className="space-y-1">
                      {phones.map((p, i) => <div key={i}>{p}</div>)}
                    </div>
                  </div>
                </li>
                {/* E-mail */}
                <li className="flex items-start">
                  <div className="bg-white p-2 rounded-full text-[#042c70] mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">{translate('contact.info.emailLabel')}</div>
                    <div className="space-y-1">
                      {emails.map((e, i) => (
                        <a key={i} href={`mailto:${e}`} className="block hover:underline">
                          {e}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Mapa */}
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <iframe
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d143397.38628852888!2d-40.31650958966213!3d-20.181058712973822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xb818e789cc6175%3A0x3142a19625e68e83!2sAv.%20Talma%20Rodrigues%20Ribeiro%2C%201891%20-%20Civit%20II%2C%20Serra%20-%20ES%2C%2029168-080!3m2!1d-20.1814414!2d-40.2341215!5e1!3m2!1spt-BR!2sbr!4v1747842496748!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="BNG Location"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

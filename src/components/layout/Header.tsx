// src/components/layout/Header.tsx

import { useState, useContext, useCallback, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown, Building2, Anchor, Target, Eye } from 'lucide-react'
import Container from '../ui/Container'
import logoBNG from '../img/LOGO-BNG-SEM-NOME.png'
import { LanguageContext } from '../../contexts/LanguageContext'
import LanguageSelector from '../ui/LanguageSelector'

interface HeaderProps {
  isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [missionDropdownOpen, setMissionDropdownOpen] = useState(false)
  const { translate } = useContext(LanguageContext)

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const missionDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const targetId = href.replace('#', '')
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        requestAnimationFrame(() => {
          const headerHeight = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        })
      }
      setMobileMenuOpen(false)
      setDropdownOpen(false)
      setMissionDropdownOpen(false)
    },
    []
  )

  const handleInfraMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setDropdownOpen(true)
  }
  const handleInfraMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  const handleMissionMouseEnter = () => {
    if (missionDropdownTimeoutRef.current) clearTimeout(missionDropdownTimeoutRef.current)
    setMissionDropdownOpen(true)
  }
  const handleMissionMouseLeave = () => {
    missionDropdownTimeoutRef.current = setTimeout(() => setMissionDropdownOpen(false), 150)
  }

  const toggleInfraDropdown = () => {
    setDropdownOpen(!dropdownOpen)
    setMissionDropdownOpen(false)
  }
  const toggleMissionDropdown = () => {
    setMissionDropdownOpen(!missionDropdownOpen)
    setDropdownOpen(false)
  }

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
      if (missionDropdownTimeoutRef.current) clearTimeout(missionDropdownTimeoutRef.current)
    }
  }, [])

  const navItemsAfter = [
    { key: 'certifications', href: '#certifications' },
    { key: 'equipment',       href: '#equipment'       },
    { key: 'clients',         href: '#clients'         },
    { key: 'contact',         href: '#contact'         },
  ]

  const infrastructureItems = [
    { key: 'headquarters', href: '#infrastructure', icon: <Building2 size={16} className="mr-2" /> },
    { key: 'portArea',     href: '#areaportuaria',  icon: <Anchor    size={16} className="mr-2" /> },
  ]

  const missionItems = [
    { key: 'mission', href: '#mission', icon: <Target size={16} className="mr-2" /> },
    { key: 'values',  href: '#values',  icon: <Eye    size={16} className="mr-2" /> },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#042c70] shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <img src={logoBNG} alt="BNG Metalmecânica" className="h-10 md:h-12" />

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Home, Sobre, Serviços */}
            <a
              href="#home"
              onClick={e => handleSmoothScroll(e, '#home')}
              className="text-white hover:text-[#f5cb0d] transition-colors font-medium text-sm cursor-pointer"
            >
              {translate('nav.home')}
            </a>
            <a
              href="#about"
              onClick={e => handleSmoothScroll(e, '#about')}
              className="text-white hover:text-[#f5cb0d] transition-colors font-medium text-sm cursor-pointer"
            >
              {translate('nav.about')}
            </a>
            <a
              href="#services"
              onClick={e => handleSmoothScroll(e, '#services')}
              className="text-white hover:text-[#f5cb0d] transition-colors font-medium text-sm cursor-pointer"
            >
              {translate('nav.services')}
            </a>

            {/* Dropdown Infraestrutura */}
            <div
              className="relative"
              onMouseEnter={handleInfraMouseEnter}
              onMouseLeave={handleInfraMouseLeave}
            >
              <button
                onClick={toggleInfraDropdown}
                className="flex items-center text-white hover:text-[#f5cb0d] transition-colors font-medium text-sm cursor-pointer py-2 px-1"
              >
                {translate('nav.infrastructure')}
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={handleInfraMouseEnter}
                  onMouseLeave={handleInfraMouseLeave}
                >
                  {infrastructureItems.map(item => (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={e => handleSmoothScroll(e, item.href)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#042c70] cursor-pointer"
                    >
                      {item.icon}
                      {translate(`nav.${item.key}`)}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown Missão & Visão */}
            <div
              className="relative"
              onMouseEnter={handleMissionMouseEnter}
              onMouseLeave={handleMissionMouseLeave}
            >
              <button
                onClick={toggleMissionDropdown}
                className="flex items-center text-white hover:text-[#f5cb0d] transition-colors font-medium text-sm cursor-pointer py-2 px-1"
              >
                {translate('nav.missionVision')}
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-200 ${
                    missionDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {missionDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={handleMissionMouseEnter}
                  onMouseLeave={handleMissionMouseLeave}
                >
                  {missionItems.map(item => (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={e => handleSmoothScroll(e, item.href)}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#042c70] cursor-pointer"
                    >
                      {item.icon}
                      {translate(`nav.${item.key}`)}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Certificações, Equipamentos, Clientes, Contato */}
            {navItemsAfter.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={e => handleSmoothScroll(e, item.href)}
                className="text-white hover:text-[#f5cb0d] transition-colors font-medium text-sm cursor-pointer"
              >
                {translate(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#042c70] absolute top-full left-0 right-0 shadow-xl">
          <Container>
            <div className="py-2 flex flex-col space-y-4">
              {/* Mesma ordem no mobile */}
              <a
                href="#home"
                onClick={e => handleSmoothScroll(e, '#home')}
                className="text-white hover:text-[#f5cb0d] transition-colors px-4 py-2 text-sm cursor-pointer"
              >
                {translate('nav.home')}
              </a>
              <a
                href="#about"
                onClick={e => handleSmoothScroll(e, '#about')}
                className="text-white hover:text-[#f5cb0d] transition-colors px-4 py-2 text-sm cursor-pointer"
              >
                {translate('nav.about')}
              </a>
              <a
                href="#services"
                onClick={e => handleSmoothScroll(e, '#services')}
                className="text-white hover:text-[#f5cb0d] transition-colors px-4 py-2 text-sm cursor-pointer"
              >
                {translate('nav.services')}
              </a>

              {/* Infraestrutura (mobile) */}
              <div className="px-4">
                <div className="text-white font-medium text-sm mb-2">
                  {translate('nav.infrastructure')}
                </div>
                {infrastructureItems.map(item => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={e => handleSmoothScroll(e, item.href)}
                    className="flex items-center text-white hover:text-[#f5cb0d] transition-colors pl-4 py-1 text-sm cursor-pointer"
                  >
                    {item.icon}
                    {translate(`nav.${item.key}`)}
                  </a>
                ))}
              </div>

              {/* Missão & Visão (mobile) */}
              <div className="px-4">
                <div className="text-white font-medium text-sm mb-2">
                  {translate('nav.missionVision')}
                </div>
                {missionItems.map(item => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={e => handleSmoothScroll(e, item.href)}
                    className="flex items-center text-white hover:text-[#f5cb0d] transition-colors pl-4 py-1 text-sm cursor-pointer"
                  >
                    {item.icon}
                    {translate(`nav.${item.key}`)}
                  </a>
                ))}
              </div>

              {/* ...os itens após */}
              {navItemsAfter.map(item => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={e => handleSmoothScroll(e, item.href)}
                  className="text-white hover:text-[#f5cb0d] transition-colors px-4 py-2 text-sm cursor-pointer"
                >
                  {translate(`nav.${item.key}`)}
                </a>
              ))}

              {/* Language Selector (mobile) */}
              <div className="flex justify-center py-2">
                <LanguageSelector />
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
} // ← chave de fechamento do componente

export default Header

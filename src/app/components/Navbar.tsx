'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface NavItem {
  id: string
  label: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { id: '01', label: 'Startseite', href: '#startseite' },
  { id: '02', label: 'Expertise', href: '#expertise' },
  { id: '03', label: 'Projekte', href: '#projekte' },
  { id: '04', label: 'Erfahrung', href: '#erfahrung' },
  { id: '05', label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll-Handler für Navbar-Transformation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Verhindere Scrolling wenn Mobile-Menü offen
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className={`nav-container ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="font-mono text-lg hover:text-primary transition-colors"
            >
              BH<span className="text-primary">.</span>_
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {NAV_ITEMS.map(({ id, label, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="group flex items-center space-x-2 nav-link"
                >
                  <span className="text-primary text-xs font-mono">{id}</span>
                  <span className="font-mono">// {label}</span>
                </Link>
              </li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className={`
              block w-6 h-0.5 bg-foreground transition-all duration-300
              ${mobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}
            `}
            />
            <span
              className={`
              block w-6 h-0.5 bg-foreground mt-1.5 transition-all duration-300
              ${mobileMenuOpen ? 'opacity-0' : ''}
            `}
            />
            <span
              className={`
              block w-6 h-0.5 bg-foreground mt-1.5 transition-all duration-300
              ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}
            `}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`
            md:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-md
            transition-all duration-300 z-40
            ${
              mobileMenuOpen
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }
          `}
          initial={false}
          animate={mobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
        >
          <nav className="container mx-auto px-6 py-8">
            <ul className="space-y-6">
              {NAV_ITEMS.map(({ id, label, href }, index) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={href}
                    className="group flex items-center space-x-4 nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-primary text-sm font-mono">{id}</span>
                    <span className="text-lg font-mono">// {label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </nav>
    </header>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from 'lucide-react'

interface ThemeToggleProps {
  className?: string
}

type Theme = 'light' | 'dark' | 'system'

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)

  // Initialisiere Theme-State und setze mounted-Flag
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme
    setTheme(savedTheme || 'system')
  }, [])

  // Theme-Änderungen verarbeiten
  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    // Theme-Klassen aktualisieren
    root.classList.remove('light', 'dark')
    const finalTheme = theme === 'system' ? systemTheme : theme
    root.classList.add(finalTheme)

    // Theme in localStorage speichern
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  // System Theme Changes überwachen
  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(mediaQuery.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  // Render nur nach Hydration
  if (!mounted) {
    return <div className="w-9 h-9" /> // Placeholder zur Vermeidung von Layout Shifts
  }

  const iconVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  }

  const getCurrentIcon = () => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? (
        <MoonIcon className="w-[18px] h-[18px]" />
      ) : (
        <SunIcon className="w-[18px] h-[18px]" />
      )
    }
    return theme === 'dark' ? (
      <MoonIcon className="w-[18px] h-[18px]" />
    ) : (
      <SunIcon className="w-[18px] h-[18px]" />
    )
  }

  return (
    <motion.button
      onClick={() => {
        setTheme((current) => {
          const themeMap: Record<Theme, Theme> = {
            light: 'dark',
            dark: 'system',
            system: 'light',
          }
          return themeMap[current]
        })
      }}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors ${className}`}
      whileTap={{ scale: 0.95 }}
      aria-label="Theme Toggle"
    >
      <motion.div
        key={theme}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={iconVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {getCurrentIcon()}
      </motion.div>

      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-[#2a2a2a] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {theme === 'system'
          ? 'System Theme'
          : `${theme.charAt(0).toUpperCase() + theme.slice(1)} Mode`}
      </span>
    </motion.button>
  )
} /*}

// Beispielverwendung:
/*
import ThemeToggle from './ThemeToggle'

export default function Layout() {
  return (
    <div>
      <nav>
        <ThemeToggle className="ml-auto" />
      </nav>
      {/* Rest der Layout-Komponente */
    </div>
  )
}
*/

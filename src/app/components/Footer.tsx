'use client'

import Link from 'next/link'

interface SocialLink {
  platform: string
  url: string
  label: string
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/bilalhassan',
    label: 'GitHub Profil',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/bilalhassan',
    label: 'LinkedIn Profil',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/bilalhassan',
    label: 'Twitter Profil',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'Projekte', 'Tech Stack', 'Kontakt'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map(({ platform, url, label }) => (
                <li key={platform}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground transition-colors"
                    aria-label={label}
                  >
                    {platform}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Kontakt</h3>
            <p className="text-sm text-muted">kontakt@bilalhassan.de</p>
            <p className="text-sm text-muted">Frankfurt am Main, Deutschland</p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {currentYear} Bilal Hassan. Alle Rechte vorbehalten.
          </p>

          <div className="text-sm text-muted flex gap-4">
            <Link
              href="/impressum"
              className="hover:text-foreground transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-foreground transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import '../styles/globals.css' // Relativer Import der globalen CSS-Datei
import { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Mein Futuristisches Portfolio',
  description: 'Modernes, futuristisches Design inspiriert von Clearbit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="animated-gradient text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Hauptinhalt */}
        <main className="relative min-h-screen pt-20">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}

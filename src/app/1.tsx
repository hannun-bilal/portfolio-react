// src/app/page.tsx
import Image from 'next/image'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 px-4 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Gemeinsam in die Zukunft
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Willkommen in meinem futuristischen Portfolio! Lass uns moderne
            Lösungen entwickeln, die das Morgen schon heute möglich machen.
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-500 transition transform hover:scale-105"
          >
            Zu den Projekten
          </a>
        </div>
        {/* Dekoratives Hintergrund-Element */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-96 w-96 bg-blue-300 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
      </section>

      {/* Über-mich Bereich mit Glas-Effekt */}
      <section className="mx-auto max-w-5xl py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-white">Über mich</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-300 mb-4">
              Ich bin ein leidenschaftlicher Softwareentwickler mit Fokus auf
              moderne Webtechnologien wie React, TypeScript, Next.js und
              Node.js. Mein Ziel ist es, robuste und skalierbare Anwendungen zu
              schaffen, die echten Mehrwert bieten.
            </p>
            <p className="text-gray-300">
              Ob Frontend, Backend oder DevOps – ich liebe es, mich neuen
              Herausforderungen zu stellen und gemeinsam mit dir innovative
              Lösungen zu entwickeln.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            {/* Profilbild einfügen */}
            <Image
              src="/profilbild.jpg" // Stelle sicher, dass das Bild in public/profilbild.jpg liegt
              alt="Mein Profilbild"
              width={250}
              height={250}
              className="rounded-full shadow-lg border-4 border-blue-600"
            />
          </div>
        </div>
      </section>

      {/* Projekte-Bereich */}
      <section
        id="projects"
        className="mx-auto max-w-7xl py-16 px-4 bg-transparent"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Meine Projekte
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Projekt-Karte #1 */}
          <div className="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-2">
              AI Chatbot
            </h3>
            <p className="text-gray-300 mb-4">
              Ein Chatbot mit NLP zur automatisierten Kundenkommunikation.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mehr erfahren
            </a>
          </div>

          {/* Projekt-Karte #2 */}
          <div className="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-2">
              E-Commerce Web App
            </h3>
            <p className="text-gray-300 mb-4">
              React-Frontend, Node.js-Backend, Stripe-Integration für Zahlungen.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mehr erfahren
            </a>
          </div>

          {/* Projekt-Karte #3 */}
          <div className="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Microservice Architektur
            </h3>
            <p className="text-gray-300 mb-4">
              Skalierbare Microservices in einer FinTech-Umgebung.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Skills-Bereich */}
      <section className="mx-auto max-w-5xl py-16 px-4 bg-transparent">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Meine Fähigkeiten
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Beispiel für Skill-Karte */}
          <div className="p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white mb-2">
              TypeScript
            </h3>
            <p className="text-gray-300">
              Statische Typisierung für robusteren Code.
            </p>
          </div>

          <div className="p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white mb-2">Next.js</h3>
            <p className="text-gray-300">
              Server-Side Rendering und optimiertes Routing.
            </p>
          </div>

          <div className="p-4 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white mb-2">
              Tailwind CSS
            </h3>
            <p className="text-gray-300">
              Utility-First CSS für schnelles Styling.
            </p>
          </div>

          {/* Füge weitere Skills nach Bedarf hinzu */}
        </div>
      </section>

      {/* CTA / Zusammenarbeit */}
      <section className="bg-blue-600 bg-opacity-80 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für eine futuristische Zusammenarbeit?
          </h2>
          <p className="text-lg mb-8">
            Lass uns gemeinsam innovative Lösungen für dein Projekt entwickeln!
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>
    </main>
  )
}

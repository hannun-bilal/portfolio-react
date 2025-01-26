'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SkillCard from './components/SkillCard' // Stelle sicher, dass der Pfad korrekt ist
import ProjectCard from './components/ProjectCard'
// Definiere die Skills-Daten außerhalb der Komponente für bessere Performance
const SKILLS = [
  { name: 'React', category: 'frontend', level: 90 },
  { name: 'TypeScript', category: 'frontend', level: 85 },
  { name: 'Next.js', category: 'frontend', level: 88 },
  { name: 'CSS/Tailwind', category: 'frontend', level: 92 },
  { name: 'Node.js', category: 'backend', level: 87 },
  { name: 'Python', category: 'backend', level: 85 },
  { name: 'PostgreSQL', category: 'backend', level: 82 },
  { name: 'GraphQL', category: 'backend', level: 80 },
  { name: 'Docker', category: 'devops', level: 75 },
  { name: 'AWS', category: 'devops', level: 78 },
  { name: 'CI/CD', category: 'devops', level: 85 },
]

export default function Page() {
  // State für Skill-Filterung
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'frontend' | 'backend' | 'devops'
  >('all')

  // Filtere Skills basierend auf aktiver Kategorie
  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section mit Name und Rolle */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-primary mb-4"
          >
            &lt;Softwareentwickler/&gt;
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Bilal Ha
          </h1>

          <p className="text-xl md:text-2xl text-muted mb-12">
            Softwareentwickler & Full-Stack Engineer
          </p>

          {/* Kategorie-Filter */}
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'frontend', 'backend', 'devops'].map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category as typeof activeCategory)
                }
                className={`px-4 py-2 rounded-full font-mono text-sm transition-colors
                  ${
                    activeCategory === category
                      ? 'bg-primary text-background'
                      : 'text-muted hover:text-primary'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  category={skill.category}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Projekte</h2>
            <ProjectCard />
          </section>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center gap-6">
            <a href="#projekte" className="button-primary">
              Projekte ansehen
            </a>
            <a href="#kontakt" className="button-secondary">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

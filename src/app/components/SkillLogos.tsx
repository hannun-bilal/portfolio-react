// src/app/components/SkillLogos.tsx
'use client'

import {
  FaJava,
  FaJs,
  FaPython,
  FaReact,
  FaAngular,
  FaCuttlefish,
  FaHtml5,
  FaBootstrap,
  FaDocker,
  FaGitAlt,
} from 'react-icons/fa'

import {
  SiTypescript,
  SiNumpy,
  SiAnaconda,
  SiCplusplus,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'

const logos = [
  { icon: FaJava, name: 'Java' },
  { icon: FaJs, name: 'JavaScript' },
  { icon: FaPython, name: 'Python' },
  { icon: SiNumpy, name: 'NumPy' },
  { icon: SiAnaconda, name: 'Conda' },
  { icon: FaCuttlefish, name: 'C++' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: FaReact, name: 'React' },
  { icon: FaAngular, name: 'Angular' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: FaGitAlt, name: 'Git' },
  { icon: SiCplusplus, name: 'C++' },
  { icon: RiTailwindCssFill, name: 'Tailwindcss' },
  { icon: FaHtml5, name: 'HTML5' },
  { icon: FaBootstrap, name: 'Bootstrap5' },
  { icon: FaDocker, name: 'Docker' },
  // Weitere Logos hinzufügen
]

export default function SkillLogos() {
  return (
    <div className="overflow-hidden">
      <div className="whitespace-nowrap animate-scroll">
        {logos.map((logo, index) => {
          const IconComponent = logo.icon
          return (
            <div key={index} className="inline-block mx-4 text-5xl text-white">
              <IconComponent title={logo.name} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

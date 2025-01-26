'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiAmazonwebservices,
  SiGithubactions,
} from 'react-icons/si'

// Skill-Icon-Mapping
const SKILL_ICONS: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: '#61DAFB' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  'CSS/Tailwind': { icon: SiTailwindcss, color: '#38B2AC' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  Python: { icon: SiPython, color: '#3776AB' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791' },
  GraphQL: { icon: SiGraphql, color: '#E10098' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  AWS: { icon: SiAmazonwebservices, color: '#FF9900' },
  'CI/CD': { icon: SiGithubactions, color: '#2088FF' },
}

interface SkillCardProps {
  name: string
  level: number
  category: string
}

export default function SkillCard({ name, level, category }: SkillCardProps) {
  const iconData = SKILL_ICONS[name]
  const Icon = iconData?.icon

  return (
    <motion.div
      className="group relative bg-[#1A1A1A] rounded-lg p-4 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      <div className="flex items-center gap-3 mb-2">
        {Icon && (
          <Icon
            className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
            style={{ color: iconData.color }}
          />
        )}
        <span className="font-mono text-sm text-gray-200">{name}</span>
      </div>

      <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            backgroundColor: iconData?.color || '#38B2AC',
            width: `${level}%`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/80 rounded-lg opacity-0 group-hover:opacity-100
                   flex flex-col items-center justify-center p-4 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <p className="text-white font-mono mb-2">{level}% Expertise</p>
        <p className="text-gray-400 text-sm">{category}</p>
      </motion.div>
    </motion.div>
  )
}

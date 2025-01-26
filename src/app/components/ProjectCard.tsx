// src/app/components/ProjectCard.tsx
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export default function ProjectCard({
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-3xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-base text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        className="text-blue-400 hover:text-blue-300 font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mehr erfahren
      </a>
    </motion.div>
  )
}

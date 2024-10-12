'use client'

import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './known-tech'
import { motion } from 'framer-motion'
import { FaAws, FaDocker, FaJava } from 'react-icons/fa'
import { SiKubernetes, SiSpringboot } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const staticTechs = [
  {
    tech: 'Docker', 
    icon: <FaDocker size={24} />,
    startDate: '2024-04-30',
  },
  {
    tech: 'AWS',
    icon: <FaAws size={24} />,
    startDate: '2024-02-14',
  },
  {
    tech: 'MySQL',
    icon: <GrMysql size={24} />,
    startDate: '2022-12-09',
  },
  {
    tech: 'Spring Boot',
    icon: <SiSpringboot size={24} />,
    startDate: '2023-10-15',
  },
  {
    tech: 'Java',
    icon: <FaJava size={24} />,
    startDate: '2023-08-16',
  },
  {
    tech: 'Kubernetes',
    icon: <SiKubernetes size={24} />,
    startDate: '2024-05-13',
  },
]

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {staticTechs.map((tech, i) => (
          <motion.div
            key={tech.tech}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
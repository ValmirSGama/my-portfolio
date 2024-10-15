'use client'

import { ProjectCard } from './project-card'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUpAnimation } from '@/app/lib/animations'

export const ProjectsList = () => {
  const projects = [
    {
      alt: "Imagem Thumbnail Relogio Analogico",
      src: "/images/Thumbnail Relogio Analogico.png",
      title: "Relógio Analógico",
      description: "Este projeto é um relógio analógico simples, desenvolvido em JavaScript, HTML e CSS. Conta também com um botão para alternar entre os modos claro e escuro.",
      technologies: "JavaScript, HTML, CSS",
      link: "/projects/relogio-analogico"
    },
    {
      alt: "Imagem Thumbnail To Do List",
      src: "/images/Thumbnail To Do List.png",
      title: "To Do List",
      description: "Este é um projeto de uma aplicação simples e eficiente de lista de tarefas (To-Do List), desenvolvida com o objetivo de facilitar o gerenciamento e a organização de atividades diárias.",
      technologies: "JavaScript, HTML, CSS",
      link: "/projects/to-do-list"
    }
    // Adicione outros projetos conforme necessário
  ]

  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link href={project.link}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  )
}
import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './project-card'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from '@/app/components/link'

export const HighlightedProjects = () => {
  const projects = [
    {
      alt: "Imagem Thumbnail To Do List",
      src: "/images/Thumbnail To Do List.png",
      title: "To Do List",
      description:
      "Este é um projeto de uma aplicação simples e eficiente de lista de tarefas (To-Do List), desenvolvida com o objetivo de facilitar o gerenciamento e a organização de atividades diárias.",
      technologies: "JavaScript, HTML, CSS",
      slug: "to-do-list"
    },
    {
      alt: "Imagem Thumbnail Relogio Analogico",
      src: "/images/Thumbnail Relogio Analogico.png",
      title: "Relógio Analógico",
      description:
        "Este projeto é um relógio analógico simples, desenvolvido em JavaScript, HTML e CSS. Conta também com um botão para alternar entre os modos claro e escuro.",
      technologies: "JavaScript, HTML, CSS",
      slug: "relogio-analogico"
    }
    // Adicione outros projetos conforme necessário
  ]

  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}
        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
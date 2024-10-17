import { projects } from '@/app/components/pages/project/data'
import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections'
import { notFound } from 'next/navigation'

type ProjectProps = {
  params: {
    slug: string
  }
}

export default function Project({ params: { slug } }: ProjectProps) {
  const project = projects.find((project) => project.slug === slug)

  if (!project) return notFound()

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  )
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}
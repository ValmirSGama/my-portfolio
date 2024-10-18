import { projects } from '@/app/components/pages/project/data'
import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections'
import { Metadata } from 'next'
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

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: '',
    }
  }

  return {
    metadataBase: new URL('https://seu-dominio.com'), // Defina o domínio correto aqui
    title: project.title,
    description: project.description.raw.replace(/<[^>]+>/g, ''), // Remove tags HTML para a descrição
    openGraph: {
      images: [
        {
          url: project.pageThumbnail.src,
          width: 1200,
          height: 630,
        }
      ]
    }
  }
}
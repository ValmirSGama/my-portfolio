import { projects } from '@/app/components/pages/project/data'
import { ProjectDetails } from '@/app/components/pages/project/project-details'
import { ProjectSections } from '@/app/components/pages/project/project-sections'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ProjectProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function Project({ params }: ProjectProps) {
  const { slug } = await params
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
  params,
}: ProjectProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: '',
    }
  }

  return {
    metadataBase: new URL('https://my-portfolio-3jdd3s2l6-valmir-sales-gamas-projects.vercel.app'), // Defina o domínio correto aqui
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
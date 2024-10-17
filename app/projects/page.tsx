import { PageIntroduction } from "../components/pages/projects/page-introduction"
import { ProjectsList } from "../components/pages/projects/projects-list"

export const metadata = {
  title: 'Projetos',
}

export default async function Projects() {
  return (
    <>
      <PageIntroduction />
      <ProjectsList />
    </>
  )
}
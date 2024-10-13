import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'

const experiences = [
  {
    companyName: "Compass Uol",
    companyUrl: "https://www.linkedin.com/company/compass-uol/posts/?feedView=all",
    companyLogo: "/images/LogoBlackCompass.png",
    role: "DevSecOps JR - Estágio",
    description: [
      "Desenvolvimento e arquitetura de projetos e-commerce em AWS Cloud utilizando Linux.",
      "Implementação e gerenciamento de contêineres com Docker e orquestração com Kubernetes.",
      "Colaboração em equipes multifuncionais para o desenvolvimento seguro de aplicações."
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Linux"],
    startDate: "2024-01-22",
    endDate: "2024-06-22",
  }
  // Adicione mais experiências conforme necessário
]

export const WorkExperience = () => {

  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Estou sempre aberto a novos desafios e projetos. Vamos trabalhar
          juntos para criar soluções incríveis para o seu negócio!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  )
}
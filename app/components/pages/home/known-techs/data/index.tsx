import { FaAws, FaDocker, FaJava } from 'react-icons/fa'
import { SiKubernetes, SiSpringboot } from "react-icons/si"
import { GrMysql } from "react-icons/gr"

export const staticTechs = [
  {
    tech: 'Docker',
    icon: <FaDocker size={24} />,
    startDate: '2024-04-30'
  },
  {
    tech: 'AWS',
    icon: <FaAws size={24} />,
    startDate: '2024-02-14'
  },
  {
    tech: 'MySQL',
    icon: <GrMysql size={24} />,
    startDate: '2022-12-09'
  },
  {
    tech: 'Spring Boot',
    icon: <SiSpringboot size={24} />,
    startDate: '2023-10-15'
  },
  {
    tech: 'Java',
    icon: <FaJava size={24} />,
    startDate: '2023-08-16'
  },
  {
    tech: 'Kubernetes',
    icon: <SiKubernetes size={24} />,
    startDate: '2024-05-13'
  }
]
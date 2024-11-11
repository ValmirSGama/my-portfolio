'use client'

import { getDetailedRelativeTimeString } from '@/app/utils/get-detailed-relative-time'

type KnownTechProps = {
  tech: {
    tech: string;
    icon: JSX.Element;
    startDate: string
  }
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  const detailedTime = getDetailedRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  )

  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.tech}</p>
        {tech.icon}
      </div>
      <span>{detailedTime} de experiência</span>
    </div>
  )
}
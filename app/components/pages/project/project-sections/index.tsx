'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/app/lib/animations'
import { Section } from '../project-type'

type ProjectSectionsProps = {
  sections: Section[]
}

export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <motion.div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>

          <Image
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sessão ${section.title}`}
            src={section.image.src}
            unoptimized
          />

          {/* Renderiza o vídeo, se existir */}
          {section.videoUrl && (
            <div className="w-full mt-4">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-300 text-center mb-4">
                {section.videoTitle || `Vídeo da sessão ${section.title}`}
              </h2>
              
              <iframe
                width="1080"
                height="672"
                className="w-full aspect-auto rounded-lg object-cover"
                src={section.videoUrl}
                title={section.videoTitle || `Vídeo da sessão ${section.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </motion.div>
      ))}
    </section>
  )
}
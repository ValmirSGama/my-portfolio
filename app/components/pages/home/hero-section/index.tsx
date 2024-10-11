'use client'

import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

const technologies = [
  'Java',
  'Spring Boot',
  'MySQL',
  'AWS',
  'Docker',
  'Kubernetes',
];

const introduction = `
  Formado em <strong>Análise e Desenvolvimento de Sistemas</strong>, com expertise no 
  <strong>Back-end</strong> e desenvolvendo habilidades no <strong>front</strong>, 
  crio soluções escaláveis e eficientes com foco em performance e segurança. 
  Estou em busca de novas oportunidades. Vamos levar sua ideia para o digital?
`;

const socials = [
  { icon: <FaGithub />, url: 'https://github.com/ValmirSGama' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/valmir-sales-tech/' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/valmir_s_g/' },
  { icon: <FaYoutube />, url: 'https://www.youtube.com/@valmirSG/featured?app=desktop' },
];

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Valmir Sales</h2>

          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <div dangerouslySetInnerHTML={{ __html: introduction }} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {technologies.map((tech, i) => (
              <TechBadge
                name={tech}
                key={tech}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {socials.map((contact, i) => (
                <a
                  href={contact.url}
                  key={`contact-${i}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-contain"
            width={420}
            height={404}
            src="/images/FotoDePerfil.jpg"
            alt="Foto de perfil de Valmir Sales"
          />
        </motion.div>
      </div>
    </section>
  );
};

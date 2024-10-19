export type Technology = {
    name: string
  }
  
  export type Section = {
    title: string
    image: {
      src: string
    }
    videoUrl?: string
    videoTitle?: string
  }  
  
  export type Project = {
    slug: string
    title: string
    description: {
      raw: string
    }
    technologies: Technology[]
    githubUrl: string
    liveProjectUrl: string
    pageThumbnail: {
      src: string
    }
    sections: Section[]
  }
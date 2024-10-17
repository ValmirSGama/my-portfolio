export const projects = [
    {
      slug: "relogio-analogico",
      title: "Relógio Analógico",
      description: {
        raw: `
          <h5>Tecnologias Utilizadas</h5>
          <ul>
            <li>HTML5: Estrutura básica do relógio.</li>
            <li>CSS3: Estilos, animações e responsividade.</li>
            <li>JavaScript: Lógica dos ponteiros.</li>
          </ul>
          <br/>
          <h5>Funcionalidades</h5>
          <ul>
            <li>Switch para "Ligar Som" e "Desligar Som".</li>
            <li>Alternância entre modos claro/escuro.</li>
            <li>Interface responsiva.</li>
          </ul>
        `
      },
      technologies: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" }
      ],
      githubUrl: "https://github.com/ValmirSGama/relogio-js",
      liveProjectUrl: "https://val-relogio-analogico.vercel.app/",
      pageThumbnail: { src: "/images/Page Thumbnail Relogio Analogico.png" },
      sections: [
        {
          title: "Home",
          image: { src: "/images/Thumbnail Relogio Analogico.png" }
        }
      ]
    },
    {
      slug: "to-do-list",
      title: "To-Do List",
      description: {
        raw: `
          <h5>Características Principais</h5>
          <ul>
            <li>Categoria de Tarefas.</li>
            <li>Adicionar Tarefas.</li>
            <li>Remover Tarefas.</li>
            <li>Marcar como Concluída.</li>
            <li>Interface Simples e Intuitiva.</li>
            <li>Responsividade completa.</li>
          </ul>
        `
      },
      technologies: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" }
      ],
      githubUrl: "https://github.com/ValmirSGama/To-Do-List.git",
      liveProjectUrl: "https://to-do-list-opal-seven-68.vercel.app/",
      pageThumbnail: { src: "/images/Page Thumbnail To Do List.png" },
      sections: [
        {
          title: "Home",
          image: { src: "/images/Thumbnail To Do List.png" }
        }
      ]
    }
  ]
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
    },
    {
      slug: "jogo-de-xadrez",
      title: "Jogo de Xadrez",
      description: {
        raw: `
          <h5>Características Principais</h5>
          <ul>
            <li>Movimentos especiais como Castling, En Passant e Promotion.</li>
            <li>Tabuleiro com destaque visual em azul para possíveis jogadas.</li>
            <li>Identificação dos jogadores pelas iniciais das peças em inglês.</li>
            <li>"P" para Pawn/Peão, "B" para Bishop/Bispo, "C" para Knight/Cavaleiro, "Q" para Queen/Rainha, "K" para King/Rei, "R" para Rook/Torre.</li>
          </ul>
        `
      },
      technologies: [
        { name: "Java" }
      ],
      githubUrl: "https://github.com/ValmirSGama/sistemaJogoDeXadrez-Java",
      liveProjectUrl: "https://valmirsgama.github.io/sistemaJogoDeXadrez-Java/",
      pageThumbnail: { src: "/images/Page Thumbnail Jogo de Xadrez.png" },
      sections: [
        {
          title: "Home",
          image: { src: "/images/Page Thumbnail Jogo de Xadrez.png"},
          videoUrl: "/videos/Demo-Xadrez.mp4",
          videoTitle: "Demo do Jogo de Xadrez"
        }
      ]
    }    
]
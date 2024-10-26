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
      pageThumbnail: { src: "/images/PageThumbnailRelogioAnalogico.png" },
      sections: [
        {
          title: "Home",
          image: { src: "/images/ThumbnailRelogioAnalogico.png" }
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
      pageThumbnail: { src: "/images/PageThumbnailToDoList.png" },
      sections: [
        {
          title: "Home",
          image: { src: "/images/ThumbnailToDoList.png" }
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
      pageThumbnail: { src: "/images/PageThumbnailJogoDeXadrez.png" },
      sections: [
        {
          title: "Home",
          image: { src: "/images/ThumbnailJogoDeXadrez.png"},
          videoUrl: "/videos/Demo-Xadrez.mp4",
          videoTitle: "Demo do Jogo de Xadrez"
        }
      ]
    },
    {
      slug: "book-store",
      title: "Book Store",
      description: {
        raw: `
          <h5>Tecnologias Utilizadas</h5>
          <ul>
            <li>HTML5: Estrutura e seções do site.</li>
            <li>CSS3: Estilos, layout responsivo e animações.</li>
            <li>JavaScript: Funcionalidades interativas.</li>
            <li>Swiper.js: Carrossel de imagens para exibição de livros.</li>
            <li>Font Awesome: Ícones personalizados.</li>
          </ul>
          <br/>
          <h5>Funcionalidades</h5>
          <ul>
            <li>Header com navegação e ícones interativos (carrinho, login e busca).</li>
            <li>Home Section com banners promocionais, carrossel de livros e botão de compra.</li>
            <li>Ícones de benefícios, incluindo frete grátis, pagamento seguro e suporte 24/7.</li>
            <li>Seção de login com formulário interativo.</li>
            <li>Layout responsivo para dispositivos móveis.</li>
          </ul>

        `
      },
      technologies: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" }
      ],
      githubUrl: "https://github.com/ValmirSGama/book-store",
      liveProjectUrl: "https://valbook-store.vercel.app/",
      pageThumbnail: { src: "/images/PageThumbnailBook-Store.png" },
      sections: [
        {
          title: "Home",
          image: { src: "/images/ThumbnailBook-Store.png" }
        }
      ]
    }
    // Adicione outros projetos conforme necessário  
]
const projects_list = document.getElementById('project-list');
const experience_list = document.getElementById('experience-list');
const technologys_list = document.getElementById('technologys-list');

const projects = [
  {
    url: 'https://yluiz.github.io/prodmais-collaborators/',
    title: 'Prod+ Collaborators',
    image: '',
    description: 'Site responsive com cards de todos o colaboradores do projeto Prod+ 2022, feito por uma equipe da turma de Análise e desenvolvimento de sistemas.',
    colorClass: 'purple',
    tecnology: 'CSS'
  },

  {
    url: 'https://yluiz.github.io/beautysalon/',
    title: 'beatysalon',
    image: '',
    description: 'Site de salão de beleza, responsivo e com um design agradável para pessoas interessadas em saber mais do serviço oferecido pelo salão.',
    colorClass: 'orange',
    tecnology: 'HTML'
  },

  {
    url: 'https://yluiz.github.io/CMLife/',
    title: 'CMLife',
    image: '',
    description: 'Site responsivo de um consultório que atende pesssoas para diferentes serviços de saúde. Este site foi feito com HTML, CSS e JavaScript.',
    colorClass: 'orange',
    tecnology: 'HTML'
  },

  {
    url: 'https://yluiz.github.io/nlw_card/',
    title: 'nlw-card',
    image: '',
    description: 'Cartão de apresentação online e responsivo que utiliza a API de usuário do Github para conseguir informações como o nome, foto de perfil, redes sociais e o username do próprio Github.',
    colorClass: 'orange',
    tecnology: 'HTML'
  },

  {
    url: 'https://github.com/yLuiz/feedback-meals',
    title: 'feedback-meals',
    image: '',
    description: 'Permite o usuário a votar sobre o que achou da refeição. Mostrando os votos em um gráfico via WebSocket. O sistema ainda está em desenvolvimento em desenvolvimento porém você pode ver o visual inicial no repositório. Foi utilizado Angular 13+, Nestjs, Typescript, Prisma, Socket.io, Docker, Sass e MySQL para o desenvolvimento do sistema.',
    colorClass: 'blue',
    tecnology: 'Typescript'
  },

  {
    url: 'https://widget-feedback-six.vercel.app',
    title: 'widget-feedback',
    image: '',
    description: 'Pode ser considerado uma feature muito útil para sistemas maiores, pois o objetivo dela é coletar problemas(bugs), ideias ou alguma outra situção dentro de um aplicativo. Foi utilizado React, React Native, Typescript, Express e Prisma, com deploy feito na vercel (Frontend) e Railway (Backend).',
    colorClass: 'blue',
    tecnology: 'Typescript',
  },

  {
    url: 'https://github.com/yLuiz/bshelf-angular',
    title: 'bshelf-angular',
    image: '',
    description: 'Um sistema semelhante a uma lista de afazeres, com uma sutil diferença, é uma lista de livros que você pretende ler, está lendo ou leu. A aplicação foi desenvolvida utilizando Typescript, Angular e consume uma API com base de dados no MongoDB Atlas, API feita por mim mesmo. Esta API foi feita utilizando Typescript, Node.js, Express, Mongoose e Postman para teste de requesição e resposta.',
    colorClass: 'blue',
    tecnology: 'Typescript'
  },

  {
    url: 'https://github.com/yLuiz/moments',
    title: 'Momments',
    image: '',
    description: 'Sistema semelhante a uma rede social, onde um usuario pode postar fotos de seus melhores momentos. Sistema foi desenvolvido utilizando Angular.',
    colorClass: 'blue',
    tecnology: 'Typescript',
  },

  {
    url: 'https://github.com/yLuiz/ecoleta',
    title: 'ecoleta',
    image: '',
    description: 'Um sistema feito para que lojas possam se cadastrar como pontos de coleta e que usuários possam saber onde encontrar esses pontos via mapa. Tecnologias usudas: React, React Native, Typescript, Express, Prisma.',
    colorClass: 'blue',
    tecnology: 'Typescript',
  },

  {
    url: 'https://github.com/yLuiz/todo-react-ts',
    title: 'todo-react',
    image: '',
    description: 'Uma To-Do List simples programada usando React.js e JSON Server para simular um banco de dados local e não relacional, é meu primeiro projeto feito com React.js.',
    colorClass: 'blue',
    tecnology: 'Typescript',
  },
];

const experiencies = [
  {
    where: 'Rocketseat',
    year: 2023,
    name: 'NLW Omnistack - Ecoleta',
    participation: 'Estudante'
  },
  {
    where: 'Digiboard',
    year: 2022,
    name: 'Desenvolvedor Fullstack',
    participation: 'Estágio'
  },
  {
    where: 'Fametro',
    year: 2022,
    name: 'Prod+',
    participation: 'Estudante'
  },
  {
    where: 'Rocketseat',
    year: 2022,
    name: 'NLW Impulse - Widget Feedback',
    participation: 'Estudante'
  },
];

const technologys = [
  {
    name: 'NODEJS',
    image: './assets/technologys/node-js.png',
  },
  {
    name: 'TYPESCRIPT',
    image: './assets/technologys/typescript.png',
  },
  {
    name: 'REACTJS',
    image: './assets/technologys/react.png',
  },
  {
    name: 'ANGULAR',
    image: './assets/technologys/angular.png',
  },
  {
    name: 'EXPRESSJS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'NESTJS',
    image: './assets/technologys/nestjs.png',
  },
  {
    name: 'WebSocket',
    image: './assets/technologys/nestjs.png',
  },
  {
    name: 'MYSQL',
    image: './assets/technologys/mysql.png',
  },
  {
    name: 'MONGODB',
    image: './assets/technologys/mongodb.png',
  },
  {
    name: 'BOOTSTRAP',
    image: './assets/technologys/bootstrap.png',
  },
  {
    name: 'DOCKER',
    image: './assets/technologys/docker.png',
  },
  {
    name: 'GIT',
    image: './assets/technologys/git.png',
  },
];

projects.map(project => {
  projects_list.innerHTML += `
    <div class="p-item">
      <div class="item-content">
        <div class="project-description">
          <a href="${project.url}" target="_blank" class="item-title">
            <img src="./assets/folder.svg" alt="Folder Icon">
            <p>${project.title}</p>
          </a>
          <p>${project.description}</p>
        </div>
        
        <ul class="avaliation-icons">
          <li class="icon">
            <img src="./assets/star.svg" alt="Star Icon">
            <p>0</p>

            <img src="./assets/git-branch.svg" alt="Git Branch Icon">
            <p>1</p>
          </li>
          <li class="icon">
            <span class="circle-icon ${project.colorClass}"></span>
            <p>${project.tecnology}</p>
          </li>
        </ul>
      </div>
    </div>
    `
});

technologys.map(technology => {
  technologys_list.innerHTML += `
    <li class="technologys-item">
      <img src="${technology.image}" alt="">
      ${technology.name}
    </li>`
});

experiencies.map(experience => {
  experience_list.innerHTML += `
    <li class="experience-item">
      <h3>${experience.where}</h3>
      <p>${experience.year}<br>${experience.name} <br> ${experience.participation}</p>
    </li>
  `
});
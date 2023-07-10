import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  itep,
  grupo_a,
  stefanini,
  tesla,
  shopify,
  holistix,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalhos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Vue.Js | React.JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Devops",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "ITEP/RN",
    icon: itep,
    iconBg: "#383E56",
    date: "Julho 2019 - Novembro 2020",
    points: [
      "Realizei a refatoração e a construção de novas funcionalidades no SIGEP - Sistema de Gestão de Perícias.",
      "Colaborei para a integração de novos desenvolvedores do time.",
      "Utilizei, HTML, CSS, Javascript, JQuery, PHP e Laravel para construção e refatoração do SIGEP na sua primeira etapa do projeto",
      "Já na segunda parte de projeto, participei da migração de tecnologia para React.JS, Node.JS e Mongo DB e tecnologias correlacionadas.",
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "Grupo +A",
    icon: grupo_a,
    iconBg: "#E6DEDD",
    date: "Novembro 2020 - Março 2021",
    points: [
      "Iniciei trabalhando com Front-End utilizando as tecnologias Vue.JS Nuxt.JS e Node.JS construindo novas funcionalidades.",
      "Construi algumas intefaces para visualizar dados dentro do sistema de gestão de alunos usando Vuetify e Vue Charts.",
      "Implementei uma aplicação de envio de mensagens entre os usuários do sistema acadêmico.",
      "Construi uma API em Node.Js, Serverless (Lambda AWS) e o banco de dados PostgreSQL (AWS RDS).",
    ],
  },
  {
    title: "Middle Backend Developer",
    company_name: "Stefanini/Raízen",
    icon: stefanini,
    iconBg: "#383E56",
    date: "Abril 2021 - Jan 2022",
    points: [
      "Realizei junto com o time o planejamento e a implementação do meio de pagamento PIX no App ShellBox.",
      "Trabalhei com o padrão de arquitetura Clean, desenvolvimento Trunk Based, Devops e fazia os deploys do back-end e front-end.",
      "Durante o projeto do PIX, atuei em conjuto com o arquiteto de software, time de gestão de produto para desenvolver as funcionalidades desse meio de pagamento.",
      "As principais tecnologias que utilizei foram o JIRA, Bitbucket, Terraform, Node.JS, Typescript, Teste unitário com Jest.JS, Type DI (Injeção de dependência), serviços AWS: Lambda, Api Gateway, CloudWatch, CloudFront, Dynamo DB, RDS Mysql, SNS e SQS.",
    ],
  },
  {
    title: "FullStack Middle Developer",
    company_name: "Holistix",
    icon: holistix,
    iconBg: "#E6DEDD",
    date: "Fevereiro 2022 - Março 2023",
    points: [
      "A função inicial foi liderar o time de tecnologia junto com o Head de engenharia.",
      "Construimos a infraestrutura na nuvem AWS, implementamos serviços usando Python e Javascript, além de usar a plataforma Jenkins para automatizar tarefas.",
      "Os principais serviços eram Lambdas que faziam a coleta de dados da API da do ecommerce que usava a platavorma VTEX.",
      "Para aprensentar os dados para os gestores e pessoal de marketing usamos o Power BI que recebia dados armazenados em bancos como o MSQL Server e Dynamo DB.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
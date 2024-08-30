import Mock from '../mock';

const database = {
  information: {
    name: 'Dario Velez Roman',
    aboutContent: `I am a Software Engineer.
    Actually working as a FullStack developer, mostly experienced in FrontEnd,
    My experience goes from developing functional backends, deploy API Rest's, 
    to mobile and web apps.
    Implementation of Unitary and Integrating testing for the projects in development.
    Always providing clean code and pixel perfect design. 
    Improve websites giving interactive content with awesome effects.`,
    age: 40,
    phone: '+54 11 5163 2992',
    nationality: 'Ecuador',
    language: 'Spanish, English',
    email: 'dvelezroman@gmail.com',
    address: 'Buenos Aires, Argentina',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/dvelezroman752938/',
      dribbble: '',
      github: 'https://github.com/dvelezroman',
    },
    brandImage: '/images/ProfilePhoto.jpg',
    aboutImage: '/images/ProfilePhoto.jpg',
    aboutImageLg: '/images/ProfilePhoto.jpg',
    cvfile: '/files/empty.pdf',
  },
  services: [
    {
      title: 'Web Design and Development',
      icon: 'color-pallet',
      details: `As web designer, focused on appearance, layout, and the content of a website. 
      Many of the designed webpages are made with a focus on simplicity, so that no extraneous information 
      and functionality that might distract or confuse users appears.`,
    },
    {
      title: 'Backend Development',
      icon: 'color-pallet',
      details: `As a backend developer, I focused the develop process to achieve API REST, GRAPHQL, and SERVERLESS backend services to serve 
      confident information ready to use in Web and Mobile apps.`,
    },
    {
      title: 'Mobile Application',
      icon: 'mobile',
      details: `Using my expertise in mobile apps development, 
      our team will help you create practical and seamless experiences on any device and get the best 
      of mobile technology for your business.`,
    },
  ],
  reviews: [
    {
      id: 1,
      content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.',
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company',
      },
    },
    {
      id: 2,
      content:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.',
      author: {
        name: 'Susan Yost',
        designation: 'Client',
      },
    },
    {
      id: 3,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client',
      },
    },
  ],
  skills: [
    {
      title: 'NodeJS',
      value: 100,
    },
    {
      title: 'Express Framework',
      value: 100,
    },
    {
      title: 'GraphQL',
      value: 100,
    },
    {
      title: 'MySQL',
      value: 100,
    },
    {
      title: 'PostgreSQL',
      value: 100,
    },
    {
      title: 'MongoDB',
      value: 100,
    },
    {
      title: 'Microservices',
      value: 100,
    },
    {
      title: 'Jenkins',
      value: 100,
    },
    {
      title: 'Docker',
      value: 100,
    },
    {
      title: 'AWS services',
      value: 100,
    },
    {
      title: 'Backend Unitary and Integration Tests (Jest & Supertest)',
      value: 100,
    },
    {
      title: 'Firebase Services',
      value: 100,
    },
    {
      title: 'Javascript',
      value: 100,
    },
    {
      title: 'Typescript',
      value: 100,
    },
    {
      title: 'ReactJS',
      value: 100,
    },
    {
      title: 'React Native',
      value: 100,
    },
    {
      title: 'Redux, Redux Saga, Redux Thunk',
      value: 100,
    },
    {
      title: 'Context API',
      value: 100,
    },
    {
      title: 'Reactive Programming with RxJS',
      value: 100,
    },
    {
      title: 'GraphQL Apollo Client',
      value: 100,
    },
    {
      title: 'Frontend Unitary and Integration Tests (Jest & Enzyme)',
      value: 100,
    },
    {
      title: 'HTML5',
      value: 100,
    },
    {
      title: 'CSS3',
      value: 100,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: 'Ivi commerce',
      subtitle: 'A beatiful ecommerce [WIP] ReactJS with Context API.',
      imageUrl: '/images/ivicommerce.png',
      url: 'https://github.com/dvelezroman/ivicommerce',
    },
    {
      id: 2,
      title: 'My React Boilerplate',
      subtitle: 'A very personal boilerplate to ready start working a react project.',
      imageUrl: '/images/react-boilerplate.jpeg',
      url: 'https://github.com/dvelezroman/my-react-boilerplate',
    },
    {
      id: 3,
      title: 'Complex CI integration project',
      subtitle: 'a project to CI integration personal projects with AWS CloudFront and Docker.',
      imageUrl: '/images/cloudfront.png',
      url: 'https://github.com/dvelezroman/complex-ci-project',
    },
    {
      id: 2,
      title: 'Polls',
      subtitle: 'Awesome mobile application to control the vote counting for elections.',
      imageUrl: '/images/polls.jpeg',
      url: 'https://github.com/dvelezroman/polls',
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: '2021 jan - present',
        position: 'FullStack Developer focused in Backend',
        company: 'Global Educational Company',
        details: `Responsible for the development and ownership of several web-based 
        components, tools and applications. Create new endpoints and connect with the Frontend site, drive some
        instances and environments for QA testing staff. Creation of a backend using serverless framework for lambdas in AWS, 
        consuming data from RDS postgres`,
      },
      {
        id: 2,
        year: '2021 july - present',
        position: 'FullStack JS Mentor',
        company: 'Alkemy',
        details: `Mentoring and act as Scrum master, technicall leader for groups of fullstack developers, helping 
        them to get up to speed to be inserted in the software development industry with a strong technical background.`,
      },
      {
        id: 3,
        year: '2020 mar - 2020 dec',
        position: 'FullStack Developer',
        company: 'Global Creative Production Company',
        details: `Responsible for the development and ownership of several web-based 
        components, tools and applications. Create new endpoints and connect with the Frontend site`,
      },
      {
        id: 4,
        year: '2017 sep - present',
        position: 'FullStack Developer',
        company: 'Freelance Contractor',
        details: `Design, analisis, planification and development of fullstack applications for companies 
        in Ecuador. Development of fullstack applications, mobile application for companies abroad.`,
      },
      {
        id: 5,
        year: '2019 feb - 2020 mar',
        position: 'FullStack Web Developer',
        company: 'Phinx Solutions',
        details: `Responsible for the development of several applications (web, mobile, backend) for clients abroad, 
        working with all the stack related to Javascript`,
      },
      {
        id: 6,
        year: '2018 feb - 2018 oct',
        position: 'FullStack developer',
        company: 'Plataforma 5',
        details: `Part of the fullstack developers team, worked on various web applications, also mobile app projects.`,
      },
      {
        id: 7,
        year: '2011 may - 2017 sep',
        position: 'Web Application developer & Technical Support',
        company: 'Contraloria General del Estado',
        details: `Technical support and development of application with PHP framework CodeIgniter, 
        and Javascript and JQuery in frontend.`,
      },
      {
        id: 8,
        year: '2008 apr - 2009 jun',
        position: 'Technology Responsible',
        company: 'Compañía Carrizal-Chone y Sistema de Riego',
        details: `Responsible for the development of a management platform to 
        control access and attendance control with PHP and MySql.`,
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: '2018 - 2019',
        graduation: 'Master in Technological Systems Evaluation',
        university: 'Universidad de Las Fuerzas Armadas- Ecuador',
        details: '',
      },
      {
        id: 2,
        year: '2024 - present',
        graduation: 'Master in Software Engineering',
        university: 'Universidad Tecnica de Manabi - Ecuador',
        details: '',
      },
      {
        id: 3,
        year: '2001 - 2009',
        graduation: 'Systems Engineer',
        university: 'Universidad Tecnica de Manabi - Ecuador',
        details: '',
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
  ],
  contactInfo: {
    phoneNumbers: ['+54 11 5163 2992'],
    emailAddress: ['dvelezroman@gmail.com'],
    address: 'C.A.B.A, Argentina',
  },
};

Mock.onGet('/api/information').reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet('/api/services').reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet('/api/reviews').reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet('/api/fskills').reply((config) => {
  const response = database.fskills;
  return [200, response];
});

Mock.onGet('/api/bskills').reply((config) => {
  const response = database.bskills;
  return [200, response];
});

Mock.onGet('/api/skills').reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet('/api/portfolios').reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet('/api/experience').reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet('/api/blog').reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet('/api/contactinfo').reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});

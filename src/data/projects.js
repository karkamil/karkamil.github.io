export const ProjectData = [
  {
    id: 1,
    title: "My Portfolio",
    desc: `You are currently visiting my new portfolio. Built with ReactJS. Fully responsive with dark mode. If you have any suggestions feel free to contact me - also throught Contact section with EmailJS. Portfolio is going to be updated with new content and upgraded with new features.`,
    tags:["ReactJS", "MaterialUI", "Styled Components", "EmailJS"],
    demo: {
      ready: true,
      link: "https://karkamil.github.io/portfolio",
    },
      github: {
        ready: true,
        link: "https://github.com/karkamil/portfolio/tree/master",
      },
    image: require("../assets/portfolio.png").default,
  },
  {
    id: 2,
    title: "Stolarstwo Pilch",
    desc: "Web page developed for a carpeting business. Designed in pure HTML, CSS and JS. New features coming soon after conversion to React. Website uses the SwiperJS library for a mobile gallery and has responsive design.",
    tags:["VanillaJS", "HTML5", "CSS3", "SwiperJS"],
    demo: {
      ready: true,
      link: "http://www.stolarstwopilch.com/",
    },
    github: "https://github.com/",
    image: require("../assets/stolarstwo.jpg").default,
  },
  {
    id: 3,
    title: "Ecommerce shop",
    desc: "Full-Stack shopping aplication in MERN stack. Currently this project is in final phase of developing client side app with React, that is using Axios to fetch the data from backend API. App uses Json Web Token for an authentication, and Stripe for payments. Backend is built with NodeJS using Express server framework, and MongoDB as a database. React admin dashboard will be developed soon.",
    tags:["ReactJS", "Redux", "NodeJS", "MongoDB", "Axios", "ExpressJS", "Rest API", "JWT", "Stripe", "Material UI", "Styled Components" ],
    demo: {
      ready: false,
      link: "www.ecomerce.com",
    },
    github: {
      ready: false,
      link: "https://github.com/",
    },
    image: require("../assets/ecommerce.png").default,
  },
  {
    id: 4,
    title: "Crypto Viewer",
    desc: "Cryptocurrency tracker in ReactJS. Built with Material UI and ChartJS to create charts based on CoinGeco API - The most comprehensive cryptocurrency API. Application will be released shortly. ",
    tags:["ReactJS", "Rest API", "Context API", "ChartJS", "Material UI", "Styled Components"],
    demo: {
      ready: false,
      link: "www.Strona do galerii projektów-blog.pl",
    },
    github: {
      ready: false,
      link: "www.bedzieDodane.com",
    },
    image: require("../assets/crypto.png").default,
  },
  {
    id: 5,
    title: "Devinit",
    desc: "Application creating project's templates from a CLI terminal, for a beginners of web development learning. Adding git version control system to new project on demand. Developed in NodeJS. Github repository will be published soon.",
    tags:["NodeJS", "CLI", "git"],
    demo: {
      ready: false,
      link: "www.Strona do galerii projektów-blog.pl",
    },
    github: {
      ready: false,
      link:"www.bedzieDodane.com",
    },
    image: require("../assets/devinit.png").default,
  },
  {
    id: 6,
    title: "Wire Game",
    desc: "IoT Project - manual game for kids based on ESP32 with Wi-Fi and Bluetooth. Programmed in Python. It is counting the time from start to the end of track, and sends it to SQL database. Currently, I am developing interface to set number of players and possible mistakes.",
    tags:[ "IoT", "Python", "ESP32", "SQL" ],
    demo:{
      ready: false,
      link: "www.Strona do galerii projektów-blog.pl",
    },
    github:{
      ready: false,
      link: "www.bedzieDodane.com",
    },
    image: require("../assets/wiregame.jpg").default,
  },
]
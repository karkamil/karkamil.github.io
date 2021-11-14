export const ProjectData = [
  {
    id: 1,
    title: "My Portfolio",
    desc: "It is my new portfolio, that you are currently watching. It is created using create-react-app. Fully ressponsive with dark mode. If you have any suggestions feel free to contact me - also throught Contact section with EmailJS. Portfolio will be updated by content and upgraded by some features soon... ",
    tags:["ReactJS", "MaterialUI", "Styled Components", "EmailJS"],
    demo: {
      ready: true,
      link: "https://karkamil.github.io/",
    },
      github: {
        ready: true,
        link: "https://github.com/karkamil/karkamil.github.io",
      },
    image: require("../assets/portfolio.png").default,
  },
  {
    id: 2,
    title: "Stolarstwo Pilch",
    desc: "Web page of carpenter. Now it is designed in pure HTML and JS, but it will be converted to React with some new features soon... It is responsive and it's using the SwiperJS library for a mobile gallery.",
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
    desc: "Not ready yet. Full - Stack shopping aplication in MERN stack. I am currently finishing UI of React client side app, that is using Axios to fetch the data from backend API. It is using Json Web Token, and Stripe for payments. Backend is in NodeJS it is using Express server framework, and is using MongoDB as a database. I am still working on React admin dashboard.",
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
    desc: "It is Cryptocurrency tracker in ReactJS. It is built with Material UI and ChartJS to preaper charts based on CoinGeco API - The most comprehensive Cryptocurrency API. It is almost finished and will be add soon. ",
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
    desc: "App to fast crate a templated projects from a terminal, for a beggining of web development learning. It is adding git version control to new project on demand. It works in CLI, is developed in NodeJS. I will add it to github repository soon.",
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
    desc: "IoT Project - manual game for kids based on ESP32 with Wi-Fi and Bluetooth. Programmed in Python. It is counting the time from begining to the end, and send it to SQL database. Currently I am developing interface to set players and number of possible mistakes.",
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
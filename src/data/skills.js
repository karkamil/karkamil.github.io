export const SkillsData = [
  {
    id: 1,
    type: "Frontend",
    list: [
      {
        id: 1,
        name: "ReactJS",
        icon: <i className="devicon-react-original colored"></i>,
      },
      { 
        id: 2,
        name: "Javascript",
        icon: <i className="devicon-javascript-plain colored"></i>,
      },
      {
        id: 3,
        name: "HTML5",
        icon: <i className="devicon-html5-plain colored"></i>,
      },
      { 
        id: 4,
        name: "CSS3",
        icon: <i className="devicon-css3-plain colored"></i>,
      },
    ],
  },
  {
    id: 2,
    type: "Backend & Databases",
    list: [
      {
        id: 1,
        name: "NodeJS",
        icon: <i className="devicon-nodejs-plain colored"></i>,
      },
      {
        id: 2,
        name: "Python",
        icon: <i className="devicon-python-plain colored"></i>,
      },
      {
        id: 3,
        name: "MongoDB",
        icon: <i className="devicon-mongodb-plain colored"></i>,
      },
      {
        id: 4,
        name: "MySQL",
        icon: <i className="devicon-mysql-plain colored"></i>,
      },
      
    ],
  },
  { 
    id: 3,
    type: "IoT & Others",
    list: [
      {
        id: 1,
        name: "RaspberryPi",
        icon: <i className="devicon-raspberrypi-line colored"></i>,
      },
      {
        id: 2,
        name: "Arduino",
        icon: <i className="devicon-arduino-plain colored"></i>,
      },
      {
        id: 3,
        name: "VBA",
        icon: <img src={require("../assets/vba80.png").default} alt="VBA"/>,
      },
      {
        id: 4,
        name: "SAP",
        icon: <img src={require("../assets/sap.png").default} alt="VBA"/>,
      },
    ],
  },
]
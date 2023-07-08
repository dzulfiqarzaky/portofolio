const main = {
    title: "HI, I'M DZULFIQAR ZAKY",
    description: [
        "Creative, detail-oriented with a deep interest in learning new technology, I have a passion for creating beautiful and functional websites. I have experience working with a variety of technologies, I love painting internet canvas with line of code. \n I enjoy building websites that are both visually appealing and user-friendly.",
        // "I am also a team player and enjoy collaborating with other professionals to create innovative solutions to complex problems. I am always looking for ways to improve my skills and stay up-to-date with the latest web development trends."
    ]
}

const contacts = {
    address: "Bekasi, West Java",
    // phone: "+62852193500--",
    link: [
        {
            title: "Email",
            url: "emailto:dzulfiqarzakyaulia@gmail.com"
        },
        {
            title: "Github",
            url: "https://github.com/dzulfiqarzaky"
        },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/dzulfiqar-zaky-02aa70181/"
        }
    ]
}

const education = [
    {
        title: "HACKTIV8 (Jan 2022 – April 2022)",
        link: "https://www.hacktiv8.com/",
        subHead: "Full Stack JavaScript Developer Program – Score 94.9 / 100",
        description: "A 4-phase program to learn about developing JavaScript-based app, from backend, web-client, mobile-client. learn multiple kinds of JavaScript tech stack such as React JS, React Native, Vue JS, etc. Developing multiple projects, from mobile to web apps during the course."
    },
    {
        title: "STIE PRIMA GRAHA (2015-2019)",
        link: "https://upg.ac.id/v1/",
        subHead: "S1 Management – GPA 3,15",
        description: `Maybe, a lot of people would ask "you came from a management degree? you jump too far". guess what? it's not, and I'm good at it, because i love it.`
    }
]

const experiences = [
    {
        title: "PT. Kaldu Sari Nabati (SEPT 2022 – Now)",
        link: "https://edot.id/",
        description: "Front End Developer (NEXTJS/TypeScript) on E-DOT Distribution System Website project of NABATI GROUP. building a new front-end modules for Hermes and Zeus website, develop React Storybook for modular components. We use Jira as a Development tools, gitito as a Git tools, NEXTJS, React query, React Storybook, ANTD, and styled component as Front End Development tools."
    },
    {
        title: "PT. Bank Mandiri (April 2022 – AUG 2022)",
        link: "https://bankmandiri.co.id/kopra-by-mandiri",
        description: "Front End Developer (REACT) on Kopra & Laju App of Mandiri project at Plaza Mandiri. Integrating and build front-end of Kopra and Laju App, mostly building chart, table, and dashboard. Fixing Front-end bugs. We use Jira as a Development tools, Bitbucket as a Git tools, React, Redux, React Chart, and ANTD as Front End Development tools."
    },
    {
        title: "Consistech Solutions (Sept 2019 – Nov 2021)",
        link: "https://consistechsolution.com/web/",
        description: "Front End Developer (REACT) for a variety of products including Enterprise Resource Planning (ERP), Hospital Information System (HIS), and Payroll systems. Mostly building a dashboard for user input and fixing front-end bugs.We use Github as a Git Tools, React, Redux, Tailwind, vuejs, jQuery, Bootstrap, vanilla CSS, and so on"
    }
]

const technologies = [
    {
        title: "Backend",
        description: "Express JS, Redis, Apollo GraphQL, REST, CRUD, Node JS, Jest, Supertest, Prisma ORM, Nest ORM, Sequelize ORM, Firestore, JWT, Bcrypt, mongoose, mongoDB"
    },
    {
        title: "Frontend",
        description: "Tailwind, React JS, React Native, Redux, Expo, Vue JS, Vuex, JQuery, Ejs, Bootstrap, Vanilla CSS, Apollo Client, HTML 5, Styled Component, ANTD, NEXTjs, framer motion."
    },
    {
        title: "Others",
        description: "Cheerio JS, MVC, NavGuard React, and Vue, Error Handler, Heroku, Firebase, Database Schema, GoogleMaps API, Socket.IO"
    },
    {
        title: "Language",
        description: "Javascript/Typescript"
    },
    {
        title: "In the process of learning",
        description: "Java/Springboot, Flutter"
    }
]

const projects = [
    {
        title: "GOMANK",
        description: "GoMank is an app where customers can book a carwash, and call the car-washer to their house or location they prefer. GoMank is an app where we have 4 clients(2 mobile apps for customer and carwasher), 2 site(admin dashboard and landing page) and 4 servers(1 for chat, 1 for users, 1 for carwasher, and 1 microservices orchestrator).",
        feat: "nearest mamang, filter order by date, chat, get location mamang, payment gateway, etc.",
        tech: [
            {
                title: "Frontend Stack",
                description: "React, React Native, babel, expo, Tailwind, HTML5, css, Axios"
            },
            {
                title: "Backend Stack",
                description: "Apollo, Tailwind, graphql, MongoDB, Docker, NodeJS, BcryptJS, dotENV, JWT, SequelizeJs, PostgreSQL, ExpressJS, jest, heroku, mongoose, socketIO, mongoDB atlas.",
            },
            {
                title: "Other tech",
                description: " XenditApi, MidtransApi, googleMapsApi, Apollo, graphql, Redis, jest, heroku, socketIO."
            }
        ],
        link: [{
            title: "GoMank",
            url: "https://github.com/GoMank/goMank"
        }]
    }, {
        title: "WEBNOVEL-SCRAPPER",
        description: "It’s a full-stack web app combined with firebase, and Cheerio js to scrap from another web novel site. It is only intended for me to learn about WebCrawler. Using login with firebase and store bookmarked novel with firebase. We have filter and pagination, and user need to login to bookmark the novel, user can read the novel inside the website.",
        feat: "Pagination, Filter by Genre, bookmark, login, NavGuard, User login, Admin Page (CRUD), scrapper from boxnovel.",
        tech: [
            {
                title: "Frontend Stack",
                description: "Vue JS, VueX, Tailwind, HTML5, Axios"
            },
            {
                title: "Backend Stack",
                description: "NodeJS, BcryptJS, dotENV, PostgreSQL, ExpressJS."
            },
            {
                title: "Other tech",
                description: "FirebaseAuth, FireStore, Cheerio."
            }
        ],
        link: [
            {
                title: "Webnovel-project",
                url: "https://webnovel-project.firebaseapp.com/" 
            }, 
            {
                title: "Webnovel-Client-Github",
                url: "https://github.com/dzulfiqarzaky/p2-iproject-client/", 
            },
            {
                title: "Webnovel-Server-Github",
                url: "https://github.com/dzulfiqarzaky/p2-iproject-server"
            }
        ]
    },
    {
        title: "PRADA-CLONE",
        description: "Prada-Clone is a Microservices website. Build for me to learn how to make a web and mobile apps with React. This is also the project where I first learn Microservices with Apollo server, GraphQL, Redis, with MongoDB and Postgress as Database.",
        feat: "Pagination, Filter by Genre, bookmark, login, NavGuard, User login, Admin Page (CRUD), scrapper from boxnovel.",
        tech: [
            {
                title: "Frontend Stack",
                description: "React, React Native, Redux, Tailwind, Bootstrap, HTML5, Axios, fetch."
            },
            {
                title: "Backend Stack",
                description: "MongoDB, NodeJS, BcryptJS, dotENV, JWT, ExpressJs, SequelizeJs, PostgreSQL, ExpressJS."
            },
            {
                title: "Other tech",
                description: "Docker"
            }
        ],
        link: [
            {
                title: "PradaClone-project",
                url: "https://client-user-prada-clone.firebaseapp.com/" 
            }, 
            {
                title: "PradaClone-Mobile-Github",
                url: "https://github.com/dzulfiqarzaky/p3-challenge-2", 
            },
            {
                title: "PradaClone-Website-Github",
                url: "https://github.com/dzulfiqarzaky/p3-challenge-1"
            }
        ]
    },
    {
        title: "CHAT-SNAP",
        description: "Chat-snap is a SSR web app where users can see their post and others ' posts, using many to many relations in the PostgreSQL database. there are admins that could delete the post, user, and hashtag used if it’s inappropriate. And User can create, delete and update their post.",
        feat: "Pagination, Filter by Company, Search by Post Name, search by Company Name, NavGuard, User login, Admin Page (CRUD) Job post.",
        tech: [
            {
                title: "Frontend Stack",
                description: "HTML5, Bootstrap 5, EJS"
            },
            {
                title: "Backend Stack",
                description: "NodeJS, BcryptJS, dotENV, JWT, ExpressJs, SequelizeJs, PostgreSQL, ExpressJS,"
            },
            {
                title: "Other tech",
                description: " Multer."
            }
        ],
        link: [
            {
                title: "ChatSnap-github",
                url: "https://github.com/dzulfiqarzaky/chatSnap" 
            }, 
        ]
    },
    {
        title: "JOB-HUNT",
        description: "Job-Hunt is a Monolith website. It’s a full-stack web app with an admin-page as CMS, client-page, and a server uploaded to firebase and Heroku. Admin can create, update, and delete job-post, user can bookmark the job, and there is filter and pagination.",
        feat: "Pagination, Filter by Company, Search by Post Name, search by Company Name, NavGuard, User login, Admin Page (CRUD) Job post.",
        tech: [
            {
                title: "Frontend Stack",
                description: "Vue JS, VueX, Tailwind, Bootstrap, Axios, HTML5, CSS, JQuery fetch."
            },
            {
                title: "Backend Stack",
                description: "NodeJS, BcryptJS, dotENV, JWT, Sequelize, PostgreSQL, ExpressJS."
            },
            {
                title: "Other tech",
                description: " Multer."
            }
        ],
        link: [
            {
                title: "JobHunt-project",
                url: "https://job-hunt-customer.firebaseapp.com/" 
            }, 
            {
                title: "JobHunt-Client-Github",
                url: "https://job-hunt-client-uppsala-fox.firebaseapp.com/", 
            },
            {
                title: "JobHunt-Server-Github",
                url: "https://job-hunt-customer.firebaseapp.com"
            }
        ]
    },
] 
// const services

export {
    main,
    education,
    experiences,
    technologies,
    projects,
    contacts,
}
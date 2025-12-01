export interface Project {
    id: number;
    title: string;
    description: string;
    githubLink: string;
    netlifyLink: string;
    ImageLink: string;
}

export const Projects: Project[] = [
    {
        id: 1,
        title: "Admission Form",
        description: "A clean and responsive student admission form built using HTML & CSS.",
        githubLink: "https://github.com/duasayani/Foam---Submit-on-Gmail.git",
        netlifyLink: "https://thriving-pothos-a564a9.netlify.app/",
        ImageLink: "images/admissionform.png"
    },{
        id: 2,
        title: "Newsletter App",
        description: "Simple UI layout for newsletter subscription with modern design styling.",
        githubLink: "https://github.com/duasayani/Newsletter-App-Clone-.git",
        netlifyLink: "https://spectacular-banoffee-6ec602.netlify.app/",
        ImageLink: "images/newsletterapp.png"
    },{
        id: 3,
        title: "Landing Page",
        description: "A polished and visually appealing landing page built with responsive layout techniques.",
        githubLink: "https://github.com/duasayani/Bootstrap.git",
        netlifyLink: "https://luminous-truffle-ba3ead.netlify.app/",
        ImageLink: "images/sitelogo(bootstrap).png"
    },{
        id: 4,
        title: "Calculator",
        description: "Fully functional calculator using HTML, CSS, and JavaScript basics.",
        githubLink: "https://github.com/duasayani/Calculator.git",
        netlifyLink: "https://calculator-pixie-1e4473.netlify.app/",
        ImageLink: "images/calculator.png"
    },{
        id: 5,
        title: "Digital Clock",
        description: "A minimal, live digital clock UI created with JavaScript DOM updates.",
        githubLink: "https://github.com/duasayani/Digital-Clock.git",
        netlifyLink: "https://personal-portfolio-rabanadas-5c2be1.netlify.app/cosmic-truffle-38a92d.netlify.app",
        ImageLink: "images/digitalclock.png"
    },{
        id: 6,
        title: "Random Quote Generator",
        description: "Generates random quotes dynamically using JavaScript.",
        githubLink: "https://github.com/duasayani/Random-Quiz-Generator.git",
        netlifyLink: "https://personal-portfolio-rabanadas-5c2be1.netlify.app/beamish-souffle-a6bd04.netlify.app",
        ImageLink: "images/sweetalert.png"
    }
]
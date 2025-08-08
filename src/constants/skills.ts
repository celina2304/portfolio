import reactImg from '../assets/images/skills/react.svg'
import nextJsImg from '../assets/images/skills/nextjs.svg'
import cssImg from '../assets/images/skills/css.svg'
import gitImg from '../assets/images/skills/git.svg'
import githubImg from '../assets/images/skills/github.svg'
import htmlImg from '../assets/images/skills/html.svg'
import jsImg from '../assets/images/skills/javascript.svg'
import tsImg from '../assets/images/skills/ts.svg'
import mongoImg from '../assets/images/skills/mongodb.svg'
import nodeImg from '../assets/images/skills/nodejs.svg'
import expressImg from '../assets/images/skills/express.svg'
import tailwindImg from '../assets/images/skills/tailwindcss.svg'
import { Skill } from '../types/components'

// const skillSet = [
//     {
//         skill: "React",
//         dark: reactImg,
//         light: reactImg,
//     },
//     {
//         skill: "CSS",
//         dark: cssImg,
//         light: cssImg,
//     },
//     {
//         skill: "Git",
//         dark: gitImg,
//         light: gitImg,
//     },
//     {
//         skill: "GitHub",
//         dark: githubImg,
//         light: githubImg,
//     },
//     {
//         skill: "HTML",
//         dark: htmlImg,
//         light: htmlImg,
//     },
//     {
//         skill: "Javascript",
//         dark: jsImg,
//         light: jsImg,
//     },
//     {
//         skill: "MongoDB",
//         dark: mongoImg,
//         light: mongoImg,
//     },
//     {
//         skill: "NodeJS",
//         dark: nodeImg,
//         light: nodeImg,
//     },
//     {
//         skill: "Tailwind Css",
//         dark: tailwindImg,
//         light:
//             tailwindImg,
//     },
// ];
const skills: Skill[] = [
    { name: "React", icon: reactImg, category: "Frontend" },
    { name: "Next.js", icon: nextJsImg, category: "Frontend" },
    { name: "HTML5", icon: htmlImg, category: "Frontend" },
    { name: "CSS3", icon: cssImg, category: "Frontend" },
    { name: "TailwindCSS", icon: tailwindImg, category: "Frontend" },
    { name: "JavaScript", icon: jsImg, category: "Frontend" },
    { name: "TypeScript", icon: tsImg, category: "Frontend" },
    { name: "Node.js", icon: nodeImg, category: "Backend" },
    { name: "Express.js", icon: expressImg, category: "Backend" },
    { name: "MongoDB", icon: mongoImg, category: "Database" },
    { name: "Git", icon: gitImg, category: "Tools" },
    { name: "GitHub", icon: githubImg, category: "Tools" }
];

export default skills;
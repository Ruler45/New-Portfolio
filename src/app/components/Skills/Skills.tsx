// import { CodeXml } from "lucide-react";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandRedux,
  IconBrandSass,
  IconBrandSvelte,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { Icon } from "@iconify/react";
import Title from "../Title/Title";
import styles from "./Skill.module.scss";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const Skills = () => {
  const skills = [
    {
      id: "1",
      title: "Frontend",
      items: [
        {
          id: 1,
          name: "HTML",
          designation: "Markup Language",
          image: <IconBrandHtml5 color="orangered" width="2em" height="2em" />,
        },
        {
          id: 2,
          name: "CSS3",
          designation: "Style Sheet Language",
          image: <IconBrandCss3 color="skyblue" width="2em" height="2em" />,
        },
        {
          id: 3,
          name: "JavaScript",
          designation: "Scripting Language for web",
          image: (
            <IconBrandJavascript color="orange" width="2em" height="2em" />
          ),
        },
        {
          id: 4,
          name: "SASS",
          designation: "CSS Preprocessor",
          image: <IconBrandSass color="purple" width="2em" height="2em" />,
        },
        {
          id: 5,
          name: "React",
          designation: "JavaScript Library for building UI",
          image: <IconBrandReact color="skyblue" width="2em" height="2em" />,
        },
        {
          id: 6,
          name: "Tailwind",
          designation: "CSS Framework",
          image: <IconBrandTailwind color="blue" width="2em" height="2em" />,
        },
        {
          id: 7,
          name: "Svelte",
          designation: "HTML & CSS Framework for easier development",
          image: <IconBrandSvelte color="orangered" width="2em" height="2em" />,
        },
        {
          id: 8,
          name: "Redux",
          designation: "State Management Library",
          image: <IconBrandRedux color="violet" width="2em" height="2em" />,
        },
      ],
    },
    {
      id: "2",
      title: "Backend",
      items: [
        {
          id: 1,
          name: "NodeJS",
          designation: "Server-side JavaScript",
          image: <IconBrandNodejs color="green" width="2em" height="2em" />,
        },
        {
          id: 2,
          name: "Prisma",
          designation: "Modern Database Access",
          image: <IconBrandPrisma color="purple" width="2em" height="2em" />,
        },
        {
          id: 3,
          name: "ExpressJS",
          designation: "web framework for Node.js",
          image: (
            <Icon
              icon="simple-icons:express"
              color="white"
              width="2em"
              height="2em"
            />
          ),
        },
        {
          id: 4,
          name: "Mongoose",
          designation: "Query Language for MongoDB",
          image: <Icon icon="devicon:mongoose" width="2em" height="2em" />,
        },
      ],
    },
    {
      id: "3",
      title: "Databases/Cloud",
      items: [
        {
          id: 1,
          name: "MongoDB",
          designation: "NoSQL Database",
          image: (
            <Icon
              icon="simple-icons:mongodb"
              color="green"
              width="2em"
              height="2em"
            />
          ),
        },
        {
          id: 2,
          name: "MySQL",
          designation: "SQL Database",
          image: <Icon icon="logos:mysql" width="2em" height="2em" />,
        },
        {
          id: 3,
          name: "AWS EC2",
          designation: "Cloud Compute Service",
          image: <Icon icon="logos:aws-ec2" width="2em" height="2em" />,
        },
        {
          id: 4,
          name: "AWS S3",
          designation: "Cloud Storage Service",
          image: <Icon icon="logos:aws-s3" width="2em" height="2em" />,
        },
        {
          id: 5,
          name: "AWS Lambda",
          designation: "Serverless Compute Service",
          image: <Icon icon="logos:aws-lambda" width="2em" height="2em" />,
        },
      ],
    },
  ];
  return (
    <div className={styles.Skills} id="skills">
      <Title title="Tech Skills" />
      <div className={styles.cardContainer}>
        {skills.map((skill) => (
          <div className={styles.card} key={skill.id}>
            <div className={styles.cardTitle}>{skill.title}</div>
            <div className={styles.cardBody}>
              <ul>
                <AnimatedTooltip items={skill.items} />
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

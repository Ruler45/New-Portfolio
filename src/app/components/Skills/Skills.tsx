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

const Skills = () => {
  const skills = [
    {
      id: "1",
      title: "Frontend",
      items: [
        <IconBrandHtml5 color="orangered" />,
        <IconBrandCss3 color="skyblue" />,
        <IconBrandJavascript color="orange" />,
        <IconBrandSass color="purple" />,
        <IconBrandReact color="skyblue" />,
        <IconBrandTailwind color="blue" />,
        <IconBrandSvelte color="orangered" />,
        <IconBrandRedux color="violet" />,
      ],
    },
    {
      id: "2",
      title: "Backend",
      items: [
        <IconBrandNodejs />,
        <IconBrandPrisma />,
        <Icon icon="skill-icons:expressjs-dark" width="1.2em" height="1.2em" />,
        <Icon icon="devicon:mongoose" width="1.2em" height="1.2em" />,
      ],
    },
    {
      id: "3",
      title: "Database",
      items: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
    },
    {
      id: "4",
      title: "Others",
      items: ["Git", "Docker", "Jest", "Mocha"],
    },
  ];
  return (
    <div className={styles.Skills}>
      <Title title="Tech Skills" />
      <div className={styles.cardContainer}>
        {skills.map((skill) => (
          <div className={styles.card} key={skill.id}>
            <div className={styles.cardTitle}>{skill.title}</div>
            <div className={styles.cardBody}>
              <ul>
                {skill.items.map((item, index) => (
                  <li key={`${skill.title}-${index - 2}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

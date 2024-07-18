// import Timeline from "../TimeLine/Timeline";
import Skills from "../Skills/Skills";
import Timeline from "../TimeLine/Timeline";
import Title from "../Title/Title";
import { Meteors } from "../ui/meteors";
import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.About} id="about">
      <Title title="About" />
      <Timeline />
      <Meteors number={50} />
      <Skills />
    </div>
  );
};

export default About;

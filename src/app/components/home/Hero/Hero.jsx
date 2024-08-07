"use client";

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";
import styles from "./Hero.module.scss";
// import { Boxes } from "../../ui/background-boxes";

const Hero = () => {
  const typewriterRef = useRef(null);
  const handleType = () => {
    // access word count number
    const color = ["#007bff", "#28a745", "#dc3545", "#a606f0", "#f07706"];
    document.querySelector(`.${styles.Typewriter}`).style.color =
      color[Math.floor(Math.random() * color.length)];
  };
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setWidth(window.innerWidth);
  //   }
  // }, []);

  return (
    <div className={styles.hero}>
      {/* {width > 900 && <Boxes className={styles.boxes} />} */}
      <div className={styles.background}>
        <Spline scene="https://prod.spline.design/vTTklX0CyzkUgD9p/scene.splinecode" />
      </div>
      <div className={styles.heroContent}>
        <p>Hey There,</p>
        <h2 className={styles.heroTitle}>
          {" "}
          I&apos;M <span>Sahin Alam</span>
        </h2>
        <h2 className={styles.heroSubtitle}>
          A <span></span>
          <div className={styles.Typewriter} ref={typewriterRef}>
            <Typewriter
              words={["Web Developer", "Cloud Enthusiast", "Linux Lover"]}
              loop={2}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={100}
              delaySpeed={1000}
              onType={handleType}
            />
          </div>
        </h2>
        <p>
          A versatile web developer and passionate enthusiast of cloud computing
          and Linux systems, currently studying at NIT Silchar. Balances
          academic pursuits with a thriving freelance career, delivering robust
          web solutions and continuously advancing skills in the tech landscape.
        </p>
      </div>
      <div className={styles.image}>
        <div className={styles.imageOverlay}></div>
        <Image
          src="https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/Personal/Sahin"
          alt="profile"
          fill
        />
      </div>
    </div>
  );
};

export default Hero;

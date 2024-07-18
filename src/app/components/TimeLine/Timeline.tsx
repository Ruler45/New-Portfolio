"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import styles from "./Timeline.module.scss";
import { Meteors } from "../ui/meteors";
const Timeline = () => {
  const data = [
    {
      id: "1",
      title: "Born",
      date: "5th April 2003",
      content:
        "I was born in a small town in India called Jiaganj in the state of West Bengal.",
      startDate: "",
      endDate: "",
    },
    {
      id: "2",
      title: "Schooling 5-10",
      Institute: "St.Joseph's English Medium School",
      content:
        "Studied in St.Joseph's English Medium School, Jiaganj from class 5 to class 10. This school affiliated to ICSE board deepen my roots in English and Mathematics. ",
      startDate: "April 2014",
      endDate: "March 2020",
    },
    {
      id: "3",
      title: "Schooling 11-12",
      Institute: "KIIT Internation School,Odissa",
      content:
        "Studied in KIIT International School, Bhubaneswar from class 11 to class 12. This school affiliated to CBSE board helped me to explore the world of Physics and Chemistry.",
      startDate: "April 2020",
      endDate: "June 2022",
    },
    {
      id: "4",
      title: "Bachelor's of Technology ",
      Institute: "National Institute of Technology, Silchar",
      content:
        "Currently pursuing my Bachelor's of Technology in Computer Science and Engineering from National Institute of Technology, Silchar. This college has helped me to explore the world of Computer Science and Engineering.",
      startDate: "July 2022",
      endDate: "Present",
    },
  ];
  useEffect(() => {
    AOS.init({
      anchorPlacement: "center-bottom",
    });
  }, []);
  return (
    <div className={styles.timeline}>
      <div className={styles.line}>
        <div className={styles.tracer}></div>
      </div>
      {data.map((item, index) => {
        return (
          <div key={item.id} className={styles.timelineItem}>
            <div
              className={styles.timelineContent}
              data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
              data-aos-delay="50"
            >
              <h3 className={styles.title}>{item.title}</h3>
              <h4 className={styles.Institute}>{item.Institute}</h4>
              {item.startDate && (
                <p className={styles.date}>
                  {item.startDate} - {item.endDate}
                </p>
              )}
              {item.date && <p className={styles.date}>{item.date}</p>}
              <p className={styles.content}>{item.content}</p>
              <Meteors number={10} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;

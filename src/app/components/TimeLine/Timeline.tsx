"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import styles from "./Timeline.module.scss";
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
        "I was born in a small town in India called Jiaganj in the state of West Bengal.",
      startDate: "April 2014",
      endDate: "March 2020",
    },
    {
      id: "3",
      title: "Schooling 11-12",
      Institute: "St.Joseph's English Medium School",
      content:
        "I was born in a small town in India called Jiaganj in the state of West Bengal.",
      startDate: "April 2020",
      endDate: "June 2022",
    },
    {
      id: "4",
      title: "Bachelor's of Technology ",
      Institute: "National Institute of Technology, Silchar",
      content:
        "I was born in a small town in India called Jiaganj in the state of West Bengal.",
      startDate: "July 2022",
      endDate: "June 2026",
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;

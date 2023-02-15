import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import classes from "./Timeline.module.css";

type experience = {
  date: string;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  description?: string[];
};

const Timeline: React.FC<{ experience: experience[] }> = (props) => {
  return (
    <>
      <VerticalTimeline lineColor="white" className={classes.timeline}>
        {props.experience.map((item) => (
          <VerticalTimelineElement
            contentStyle={{
              borderRadius: "3rem",
              padding: "1rem 3rem",
              boxShadow: "0 0.7rem gray",
              color: "black",
            }}
            contentArrowStyle={{ display: "none" }}
            className={classes.element}
            date={item.date}
            dateClassName={classes.dateStyle}
            iconStyle={{ background: "rgb(0, 0, 35)", color: "#fff" }}
            icon={
              item.icon === "education" ? <IoSchoolSharp /> : <MdOutlineWork />
            }
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.subtitle}
            </h4>
            <ul>
              {item.description?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Timeline;

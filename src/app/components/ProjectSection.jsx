"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

gsap.registerPlugin(ScrollTrigger);

const ProjectsData = [
  {
    id: 1,
    title: "Event Management System",
    description:
      "The School Event Management System is designed to streamline the planning and execution of school events. It efficiently manages all aspects of an event, including attendee registration and tracking, filing and processing evaluation forms, and monitoring student attendance.",
    imgUrl: "/images/projects/ems.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Lendy PH",
    description:
      "Lendy.ph is a lending application that connects borrowers with lenders, offering a range of loan products tailored to meet various financial needs. The platform provides a seamless online application process.",
    imgUrl: "/images/projects/lendy.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Sigcard System",
    description:
      "A signature card system is designed to manage and store customer signature images and related information. These systems are commonly used by financial institutions to verify the authenticity of customer signatures.",
    imgUrl: "/images/projects/sigcard.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section
      id="projects"
      className="py-16 bg-primary my-36"
      ref={sectionRef}
    >
      <h2 className="text-center text-white text-4xl font-extrabold">
        My Projects
      </h2>
      <div className="flex justify-center items-center gap-4 py-8">
        {["All", "Web", "Mobile"].map((tagName) => (
          <ProjectTag
            key={tagName}
            name={tagName}
            onClick={handleTagChange}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
        {filteredProjects.map((project) => (
          <li key={project.id} className="project-card">
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;

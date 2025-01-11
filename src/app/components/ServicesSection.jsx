"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import ServiceTag from "./ServiceTag";

gsap.registerPlugin(ScrollTrigger);

const ServicesData = [
  {
    id: 1,
    title: "Responsive Web Design",
    description:
      "Creating websites that adapt seamlessly to various devices and screen sizes, providing an optimal viewing experience for users on desktops, tablets, and smartphones.",
    imgUrl: "/images/services/responsive design.jpg",
    tag: ["All", "Design", "Mobile"],
  },
  {
    id: 2,
    title: "Search Engine Optimization (SEO)",
    description:
      "Optimizing website structure and content to improve search engine rankings, increasing visibility and driving organic traffic.",
    imgUrl: "/images/services/seo.webp",
    tag: ["All"],
  },
  {
    id: 3,
    title: "Database Management",
    description:
      "Design and manage databases for efficient data storage and retrieval in your application.",
    imgUrl: "/images/services/databasaewebp.webp",
    tag: ["All", "Development"],
  },
  {
    id: 4,
    title: "API integration",
    description:
      "Integrate external APIs to connect your application with third-party services and data sources.",
    imgUrl: "/images/services/api.jpg",
    tag: ["All", "Development"],
  },
  {
    id: 5,
    title: "Cloud Computing",
    description:
      "Optimize your application's performance and scalability by leveraging the power of cloud computing services.",
    imgUrl: "/images/services/cloudcomputing.webp",
    tag: ["All", "Development"],
  },
  {
    id: 6,
    title: "Custom Website Development",
    description:
      "Design and develop custom websites that align with your brand identity and meet your specific needs.",
    imgUrl: "/images/services/Custom Website Development.webp",
    tag: ["All", "Development"],
  },
  {
    id: 7,
    title: "Web Application Development",
    description:
      "Design and develop web applications that meet your business needs and provide a seamless user experience.",
    imgUrl: "/images/services/Web Application Development.jpg",
    tag: ["All", "Development", "Mobile"],
  },
  {
    id: 8,
    title: "Website Maintenance and Support",
    description:
      "Design and develop mobile apps that meet your business needs and provide a seamless user experience.",
    imgUrl: "/images/services/Website Maintenance and Support.png",
    tag: ["All", "Development"],
  },
  {
    id: 9,
    title: "Migration and Redesign Services",
    description:
      "Assisting clients in migrating existing websites to new platforms or redesigning them to improve aesthetics, functionality, and performance.",
    imgUrl: "/images/services/Migration and Redesign Services.webp",
    tag: ["All", "Design"],
  },
];

const ServicesSection = () => {
  const [tag, setTag] = useState("All");
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
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

  const filteredServices = ServicesData.filter((service) =>
    service.tag.includes(tag)
  );

  return (
    <section
      id="services"
      className="py-8 md:py-16 bg-primary my-12 md:my-36"
      ref={sectionRef}
    >
      <h2 className="text-center text-secondary text-2xl md:text-4xl font-extrabold">
        My Services
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4 py-6 md:py-8">
        {["All", "Development", "Design", "Mobile"].map((tagName) => (
          <ServiceTag
            key={tagName}
            name={tagName}
            onClick={handleTagChange}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16">
        {filteredServices.map((service) => (
          <li key={service.id} className="service-card">
            <ServiceCard {...service} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;

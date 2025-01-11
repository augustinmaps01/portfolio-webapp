"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
    { name: "HTML", logo: "/images/logo/html.png", efficiency: 90 },
    { name: "CSS", logo: "/images/logo/css.png", efficiency: 85 },
    { name: "JavaScript", logo: "/images/logo/js.png", efficiency: 80 },
    { name: "React", logo: "/images/logo/react.png", efficiency: 75 },
    { name: "Node.js", logo: "/images/logo/node.png", efficiency: 70 },
    { name: "MySQL", logo: "/images/logo/mysql.png", efficiency: 65 },
    { name: "PHP", logo: "/images/logo/php.png", efficiency: 75 },
    { name: "Laravel", logo: "/images/logo/laravel.png", efficiency: 70 },
    { name: "Git", logo: "/images/logo/git.png", efficiency: 85 },
    { name: "Bootstrap", logo: "/images/logo/bootstrap.png", efficiency: 80 },
    { name: "Tailwind", logo: "/images/logo/tailwind.png", efficiency: 75 },
    { name: "Next.js", logo: "/images/logo/next.webp", efficiency: 45 },
    { name: "Alpine JS", logo: "/images/logo/alphine.webp", efficiency: 55 },
    { name: "Vue", logo: "/images/logo/vuejs.png", efficiency: 35 },
];

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-6">
                {SKILLS.map((skill) => (
                    <li
                        key={skill.name}
                        className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <Image
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            width={40}
                            height={40}
                            className="rounded-md"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-semibold">{skill.name}</span>
                                <span className="text-sm text-gray-500">{skill.efficiency}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-500 h-2.5 rounded-full"
                                    style={{ width: `${skill.efficiency}%` }}
                                ></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-none space-y-6">
                <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <FaGraduationCap className="text-green-500 text-2xl mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Bachelor of Science in Information Technology</h3>
                        <p className="text-sm text-gray-500">
                            Christ the King College - Graduated 2020
                        </p>
                        <p className="text-sm text-gray-700">
                            Specialized in software development, web technologies, and database management systems.
                        </p>
                    </div>
                </li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-none space-y-6">
                <li className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                    <FaCertificate className="text-blue-500 text-2xl flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Web Developer Intern</h3>
                        <p className="text-sm text-gray-500">Rocketstack Inc. - Oct 2019 to Mar 2020</p>
                        <ul className="list-disc ml-6 text-sm text-gray-700 leading-relaxed">
                            <li>Collaborated with a team to develop front-end features for client websites.</li>
                            <li>Maintained and debugged existing codebases to enhance functionality.</li>
                            <li>Participated in Agile sprints and daily stand-up meetings.</li>
                        </ul>
                    </div>
                </li>
                <li className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                    <FaCertificate className="text-blue-500 text-2xl flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Lead Full Stack Developer</h3>
                        <p className="text-sm text-gray-500">RBT Bank Inc. - Current</p>
                        <ul className="list-disc ml-6 text-sm text-gray-700 leading-relaxed">
                            <li>Front-End Development: Designing and implementing user-friendly interfaces across devices and browsers.</li>
                            <li>Back-End Development: Developing and maintaining server-side logic and databases.</li>
                            <li>Project Management: Overseeing software development processes from conception to deployment.</li>
                            <li>Agile Methodologies: Managing workflows effectively to maintain productivity and adaptability.</li>
                        </ul>
                    </div>
                </li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                    end: "top 60%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(textRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "top 60%",
                    toggleActions: "play none none reverse",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const [tab, setTab] = useState("skills");

    const handleTabChange = (id) => {
        gsap.to(".tab-content", {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                setTab(id);
                gsap.to(".tab-content", {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            },
        });
    };

    return (
        <section id="about" className="p-6 sm:p-8  text-black" ref={sectionRef}>
            <div className="max-w-6xl mt-32 mx-auto grid md:grid-cols-2 gap-8 items-start">
                <div ref={imageRef} className="flex justify-center md:justify-start">
                    <Image
                        alt="About Me"
                        src="/images/hero.png"
                        width={444}
                        height={444}
                        className="rounded-lg shadow-lg transform transition-transform"
                    />
                </div>

                <div ref={textRef}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
                        About Me
                    </h2>
                    <p className="text-lg mb-6 text-center md:text-left">
                        I'm a passionate web developer with a strong focus on creating user-friendly and visually appealing web applications.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                        {TAB_DATA.map((tabItem) => (
                            <button
                                key={tabItem.id}
                                onClick={() => handleTabChange(tabItem.id)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                                    tab === tabItem.id
                                        ? "bg-[#1a1a1a] text-white shadow-lg"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                {tabItem.title}
                            </button>
                        ))}
                    </div>

                    <div
                        className="tab-content p-6 bg-white rounded-lg shadow-md transition-all min-h-[300px] max-h-[400px] overflow-auto"
                        key={tab}
                    >
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

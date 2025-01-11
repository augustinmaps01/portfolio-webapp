"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
          markers: false, // Set to true for debugging
        },
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="grid grid-cols-1 sm:grid-cols-12 gap-8 px-8 sm:px-16 lg:px-24 items-center"
      >
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="col-span-7 text-center sm:text-left"
        >
          <h1 className="text-gray-900 mb-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={["Augustin Maputol", 1500, "Web Developer", 1500, "Tech Enthusiast", 1500]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="inline-block text-[#1a1a1a]"
            />
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed mt-6">
            I specialize in crafting modern, user-friendly web applications with
            a focus on performance and aesthetics. Let's build something
            amazing together!
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Hire Me Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-4 rounded-full w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg hover:shadow-xl transition-transform duration-300"
            >
              Hire Me
            </motion.button>

            {/* Download CV Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-4 rounded-full w-full sm:w-auto border-2 border-gray-500 text-black font-bold hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 group overflow-hidden shadow-md"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Augustin-Maputol-CV.pdf";
                link.download = "Augustin-Maputol-CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="col-span-5 place-self-center mt-6 lg:mt-0 relative"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full bg-[#1a1a1a] shadow-xl overflow-hidden flex justify-center items-center">
            <Image
              src="/images/hero1.png"
              alt="Hero Image"
              width={350}
              height={350}
              className="rounded-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-transparent to-blue-500 opacity-30 blur-xl rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

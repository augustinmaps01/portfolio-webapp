"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    user_email: "",
    user_subject: "",
    user_message: "",
  });

  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        // Animate text content
        gsap.from(textRef.current, {
          opacity: 0,
          x: -100,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate form
        gsap.from(formRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    let timer;
    if (emailSubmitted) {
      timer = setTimeout(() => {
        setEmailSubmitted(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [emailSubmitted]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendContactForm = async (data) => {
    try {
      const response = await axios.post("/api/send", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setFormError(""); // Reset any previous error
    setEmailSubmitted(false); // Reset success state

    const data = {
      from: formData.user_email, // Sender email
      user_subject: formData.user_subject,
      user_message: `Sender Email: ${formData.user_email}\n\nMessage: ${formData.user_message}`, // Append the sender's email to the message
    };

    try {
      const response = await sendContactForm(data);

      if (response.status === 200) {
        setEmailSubmitted(true);
        setFormData({ user_email: "", user_subject: "", user_message: "" }); // Clear all input fields
      } else {
        setFormError("Failed to send message. Please try again later.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "An unexpected error occurred.";
      setFormError(errorMessage);
    }
  };

  return (
    <section
      id="contact"
      className="relative pt-11 grid grid-cols-1 mt-40 md:grid-cols-2 bg-black py-12 px-6 md:py-16 md:px-8 gap-8 rounded-lg"
      ref={sectionRef}
    >
      {/* Decorative Blur Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-black to-blue-900/20"></div>

      {/* Text Content */}
      <div className="z-10" ref={textRef}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-400 mb-6 max-w-md">
          I'm currently looking for new opportunities. If you have any
          questions or would like to get in touch, feel free to reach out!
        </p>
          {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.facebook.com/cloudsephiroth56"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo/2023_Facebook_icon.webp"
              alt="Facebook"
              className="h-10 w-10 hover:opacity-80 transition-opacity duration-200"
            />
          </a>
          <a
            href="https://www.instagram.com/hyorinmaruuuu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo/instagram.png"
              alt="Instagram"
              className="h-10 w-10 hover:opacity-80 transition-opacity duration-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/augustin-maputol-a50406202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo/linkedin-icon-2.svg"
              alt="LinkedIn"
              className="h-10 w-10 hover:opacity-80 transition-opacity duration-200"
            />
          </a>
          <a
            href="https://github.com/augustinmaps01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo/github.png"
              alt="github"
              className="h-10 w-10 hover:opacity-80 transition-opacity duration-200"
            />
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>

      {/* Form Section */}
      <div className="z-10" ref={formRef}>
        <form
          className="flex flex-col bg-[#1a1a1a] p-6 md:p-8 rounded-lg shadow-md space-y-4 md:space-y-6"
          onSubmit={HandleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-1 md:mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-full bg-[#18191E] text-gray-200 rounded-lg p-2 md:p-3 border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="johndoe@gmail.com"
              value={formData.user_email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-400 mb-1 md:mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="user_subject"
              name="user_subject"
              className="w-full bg-[#18191E] text-gray-200 rounded-lg p-2 md:p-3 border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Type your subject"
              value={formData.user_subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400 mb-1 md:mb-2"
            >
              Message
            </label>
            <textarea
              id="user_message"
              name="user_message"
              className="w-full bg-[#18191E] text-gray-200 rounded-lg p-2 md:p-3 border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              placeholder="Type your message"
              rows="4"
              value={formData.user_message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-600"
          >
            Send Message
          </button>

          {emailSubmitted && (
            <p className="text-green-500 mt-2">Message sent successfully!</p>
          )}
          {formError && <p className="text-red-500 mt-2">{formError}</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

import React from "react";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white mt-36 border-t border-t-[#33353F]">
      <div className="container mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-edu text-white font-bold mb-4">Augustin Maps</h2>
          <p className="text-gray-400">
            I&apos;m currently looking for new opportunities. If you have any
            questions or would like to get in touch, feel free to reach out!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 text-gray-400">
            <li>
              <Link href="#about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-blue-500">
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow me</h3>
          <ul className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <li>
              <Link
                href="https://www.facebook.com/cloudsephiroth56"
                target="_blank"
                className="hover:text-blue-500 transition"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/hyorinmaruuuu/"
                target="_blank"
                className="hover:text-blue-500 transition"
              >
                <i className="fab fa-instagram"></i> Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/augustinmaps01"
                target="_blank"
                className="hover:text-blue-500 transition"
              >
                <i className="fab fa-github"></i> Github
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/augustin-maputol-a50406202/"
                target="_blank"
                className="hover:text-blue-500 transition"
              >
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#1a1a1a] py-4 text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} AUGUSTIN MAPS. All rights reserved. Built
          with <span className="text-red-500">&hearts;</span>.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

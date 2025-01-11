import React from "react";
import Link from "next/link";

export const MenuOverlay = ({ links }) => {
  return (
    <div className="md:hidden bg-[#121212] text-white p-6 absolute top-full left-0 right-0">
      <ul className="flex flex-col items-center space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.path} passHref>
              <a className="hover:text-gray-400 transition-colors">{link.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;

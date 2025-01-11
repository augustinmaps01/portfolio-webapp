"use client";
import React from "react";

const ServiceTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`px-4 py-2 rounded-full font-semibold ${
        isSelected ? "bg-gray-700 text-secondary" : "bg-gray-200 text-gray-700"
      } transition-colors`}
    >
      {name}
    </button>
  );
};

export default ServiceTag;
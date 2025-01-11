"use client";
import React from "react";

const ServiceCard = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition-transform hover:scale-105">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-48 md:h-56 lg:h-64 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 mt-2 flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

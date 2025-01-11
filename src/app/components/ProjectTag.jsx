import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`px-6 py-2 text-lg font-medium rounded-full transition-all duration-300 ${
        isSelected
          ? "bg-primary-500 text-white shadow-lg"
          : "bg-gray-700 text-gray-300 hover:bg-primary-400"
      }`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

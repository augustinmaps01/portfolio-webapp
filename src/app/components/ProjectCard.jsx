import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Modal Animation Variants
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-full md:max-w-[400px] mx-auto">
        {/* Image Section with Framer Motion Hover Effect */}
        <motion.div
          className="h-52 md:h-72 bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${imgUrl})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={openModal} // Open the modal when clicking the image
        ></motion.div>

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between h-auto">
          {/* Title */}
          <h3 className="text-white text-xl md:text-2xl font-bold">{title}</h3>

          {/* Description */}
          <p
            className="text-gray-400 mt-2 text-sm md:text-base overflow-hidden text-ellipsis"
            style={{
              height: "4.5rem", // Adjust height to suit your layout
              display: "-webkit-box",
              WebkitLineClamp: 3, // Limit to 3 lines
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex mt-4 flex-wrap gap-4">
            <Link
              href={gitUrl}
              className="flex items-center px-4 py-2 rounded-full bg-gray-700 text-white text-sm md:text-base"
            >
              <CodeBracketIcon className="w-5 h-5 mr-2" />
              Code
            </Link>
            {previewUrl && (
              <Link
                href={previewUrl}
                className="flex items-center px-4 py-2 rounded-full bg-gray-700 text-white text-sm md:text-base"
              >
                <EyeIcon className="w-5 h-5 mr-2" />
                Preview
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="relative bg-white rounded-lg overflow-hidden w-full h-full p-4 flex flex-col justify-center items-center"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-700 bg-gray-300 rounded-full p-2 hover:bg-gray-400"
              >
                ✕
              </button>
              {/* Image */}
              <motion.img
                src={imgUrl}
                alt={title}
                className="w-full h-auto object-contain max-h-[90%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;

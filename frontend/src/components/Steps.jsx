import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Steps = () => {
  return (
    <motion.div
      className="pb-31"
      initial={{ opacity: 0.2, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-blue-500 to-blue-100 bg-clip-text text-transparent mb-10">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
        <motion.div
          className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded border-gray-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 1 }}
        >
          <img src={assets.upload_icon} alt="" className="w-9" />
          <div>
            <p className="text-xl font-medium">Upload image</p>
            <p className="text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later. <br /> This is demo.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded border-gray-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 1 }}
        >
          <img src={assets.remove_bg_icon} alt="" className="w-9" />
          <div>
            <p className="text-xl font-medium">Remove Background</p>
            <p className="text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later. <br /> This is demo.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded border-gray-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 1 }}
        >
          <img src={assets.download_icon} alt="" className="w-9" />
          <div>
            <p className="text-xl font-medium">Download image</p>
            <p className="text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later. <br /> This is demo.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Steps;

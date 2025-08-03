import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

const Upload = () => {
  const { removeBg } = useContext(AppContext);

  return (
    <motion.div
      className="mt-24 pb-31"
      initial={{ opacity: 0.1, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-blue-500 to-blue-100 bg-clip-text text-transparent mb-10">
        See the magic. Try Now
      </h1>

      <motion.div
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 1 }}
      >
        <input
          type="file"
          accept="image/*"
          id="upload1"
          hidden
          onChange={(e) => removeBg(e.target.files[0])}
        />
        <label
          htmlFor="upload1"
          className="inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-blue-500 to-blue-300 border-none rounded-full text-white text-sm mx-auto cursor-pointer"
        >
          <img src={assets.upload_btn_icon} alt="upload_btn_icon" width={20} />
          <p>Upload you image</p>
        </label>
      </motion.div>
    </motion.div>
  );
};

export default Upload;

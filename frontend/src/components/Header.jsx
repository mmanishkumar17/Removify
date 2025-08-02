import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Header = () => {

  return (
    <motion.div
      className="flex items-center justify-between max-sm:flex-col-reverse mt-15 sm:mt-26 gap-y-10 mb-31"
      initial={{ opacity: 0.2, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            BackGround{" "}
          </span>
          from
          <br className="max-md:hidden" /> images for free.
        </h1>
        <p className="my-5 text-gray-500 text-[15px]">
          Remove image backgrounds instantly with AI-powered precision.
          <br className="max-sm:hidden" />
          Perfect for designers, sellers, and creators—fast, clean, and easy to
          use.
        </p>
        <div className="max-sm:flex justify-center max-sm:mt-10">
          <input
            type="file"
            accept="image/*"
            id="upload1"
            hidden
            onChange={(e) => removeBg(e.target.files[0])}
          />
          <motion.label
            htmlFor="upload1"
            className="inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-blue-500 to-blue-300 border-none rounded-full text-white text-sm m-auto cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 1 }}
          >
            <img
              src={assets.upload_btn_icon}
              alt="upload_btn_icon"
              width={20}
            />
            <p>Upload you image</p>
          </motion.label>
        </div>
      </div>

      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="header_img" />
      </div>
    </motion.div>
  );
};

export default Header;

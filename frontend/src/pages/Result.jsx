import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
const Result = () => {
  const { resultImage, image, removeBg } = useContext(AppContext);

  return (
    <motion.div
      className="min-h-[54vh] mt-15 mb-13"
      initial={{ opacity: 0.2, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-lg px-7 py-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-3 font-semibold">Original</p>
            <img
              src={image ? URL.createObjectURL(image) : ""}
              alt=""
              className="rounded-md border border-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-gray-600 mb-3 font-semibold">
              Background Removed
            </p>
            <div className="rounded-md border border-gray-300 relative h-full overflow-hidden bg-layer">
              <img src={resultImage ? resultImage : ""} alt="" />
              {!resultImage && image && (
                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div className="border-4 border-blue-600 h-12 w-12 border-t-transparent animate-spin rounded-full"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {resultImage && (
          <div className="flex justify-center sm:justify-end items-center flex-wrap mt-6 gap-4">
            <motion.button
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
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-300 border-none rounded-full text-white text-sm mx-auto cursor-pointer"
              >
                <img
                  src={assets.upload_btn_icon}
                  alt="upload_btn_icon"
                  width={20}
                />
                <p>Try Another Image</p>
              </label>
            </motion.button>
            <motion.a
              href={resultImage}
              download
              className="border-none text-white px-8 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 1 }}
            >
              Download image
            </motion.a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Result;

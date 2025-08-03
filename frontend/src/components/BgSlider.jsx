import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const BgSlider = () => {
  const [slidePosition, setSlidePosition] = useState(50);

  const handleSliderChange = (e) => {
    setSlidePosition(e.target.value);
  };
  return (
    <motion.div
      className="pb-10 md:py-20 mx-2"
      initial={{ opacity: 0.2, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-blue-500 to-blue-100 bg-clip-text text-transparent mb-12 sm:mb-20">
        Remove BackGround With High <br /> Quality and Accuracy
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        <img
          src={assets.image_w_bg}
          alt=""
          style={{ clipPath: `inset(0 ${100.2 - slidePosition}% 0 0)` }}
        />

        <img
          className="absolute top-0 left-0 w-full h-full"
          src={assets.image_wo_bg}
          alt=""
          style={{ clipPath: `inset(0 0 0 ${slidePosition}%)` }}
        />

        <input
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
          type="range"
          min={0}
          max={100}
          value={slidePosition}
          onChange={handleSliderChange}
        />
      </div>
    </motion.div>
  );
};

export default BgSlider;

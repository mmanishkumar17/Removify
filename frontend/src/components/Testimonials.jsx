import React from "react";
import { testimonialsData } from "../assets/assets";
import { motion } from "motion/react";
const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-blue-500 to-blue-100 bg-clip-text text-transparent mb-10">
        Customer Testimonials
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 1 }}
          >
            <p className="text-4xl text-gray-500">"</p>
            <p className="text-sm text-gray-500">{item.text}</p>
            <div className="flex items-center gap-3 mt-5">
              <img src={item.image} alt="" className="w-9 rounded-full" />
              <div>
                <p>{item.author}</p>
                <p className="text-sm text-gray-600">{item.jobTitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;

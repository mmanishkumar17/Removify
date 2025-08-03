import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 pb-6">
      <a href="#top">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={assets.logo_icon} alt="" className="w-5 sm:w-10" />
          <h1 className="text-xl font-bold sm:text-3xl">Removify</h1>
        </div>
      </a>
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        CopyRight @Manish | All right reserved.
      </p>
      <div className="flex gap-1">
        <motion.img
          className="cursor-pointer"
          src={assets.facebook_icon}
          width={40}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          className="cursor-pointer"
          src={assets.twitter_icon}
          width={40}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          className="cursor-pointer"
          src={assets.google_plus_icon}
          width={40}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Footer;

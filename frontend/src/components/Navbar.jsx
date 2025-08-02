import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  return (
    <div className="flex items-center justify-between pt-10 max-sm:pt-8">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-32 sm:w-44" />
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <motion.button
          className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full bg-gradient-to-r from-blue-500 to-blue-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 1 }}
          onClick={() => openSignIn({})}
        >
          Get started
          <img src={assets.arrow_icon} alt="" className="w-3 sm:w-4" />
        </motion.button>
      )}
    </div>
  );
};

export default Navbar;

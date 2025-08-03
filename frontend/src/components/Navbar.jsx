import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";
const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <div className="flex items-center justify-between pt-10 max-sm:pt-8">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={assets.logo_icon} alt="" className="w-5 sm:w-10" />
          <h1 className="text-xl font-bold sm:text-3xl">Removify</h1>
        </div>
      </Link>
      {isSignedIn ? (
        <div className="flex items-center gap-2 sm:gap-3 ">
          <button
            onClick={() => navigate("/buy")}
            className="flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full cursor-pointer"
          >
            <img src={assets.credit_icon} alt="" className="w-5" />
            <p className="text-xs sm:text-sm font-medium text-gray-600">
              Credits : {credit}
            </p>
          </button>
          <p className="text-gray-600 max-sm:hidden">Hi, {user.fullName}</p>
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

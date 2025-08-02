import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 pb-6">
      <img src={assets.logo} alt="" width={150} />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        CopyRight @Manish | All right reserved.
      </p>
      <div className="flex gap-1">
        <img src={assets.facebook_icon} width={40} />
        <img src={assets.twitter_icon} width={40} />
        <img src={assets.google_plus_icon} width={40} />
      </div>
    </div>
  );
};

export default Footer;

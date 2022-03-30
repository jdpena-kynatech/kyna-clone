import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialsSideBar = () => {
  return (
    <div
      id="sidebar__socials"
      className="fixed left-2 top-0 bottom-12 my-auto flex  h-80 flex-row-reverse items-center justify-around">
      <p className="font-primary tracking-wide">FOLLOW US</p>
      <div className="mx-auto h-[1px] w-16 rotate-90 bg-emerald-600" />
      <div className="flex gap-x-4 fill-current text-neutral-700">
        <FaFacebookF className="rotate-180 cursor-pointer" size={19} />
        <FaTwitter className="rotate-180 cursor-pointer" size={19} />
        <FaInstagram className="rotate-180 cursor-pointer" size={19} />
      </div>
    </div>
  );
};

export default SocialsSideBar;

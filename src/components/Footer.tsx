import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container fixed bottom-4 left-0 right-0 mx-auto flex h-[20.5rem] flex-col items-center justify-around px-[4.44rem] font-secondary">
      <div className="grid w-full grid-cols-12 justify-between">
        <div className="col-span-3 col-start-1 space-y-5">
          <p className="font-light">Email</p>
          <a
            className="block text-2xl text-neutral-500"
            href="mailto:hello@kynatech.ph">
            hello@kynatech.ph
          </a>
        </div>
        <div className="col-span-3 col-start-5 space-y-5">
          <p className="font-light">Contact no.</p>
          <p className="text-2xl text-neutral-500">(+63) 998 8644 579</p>
        </div>
        <div className="col-span-2 col-start-11 space-y-5 justify-self-end">
          <p className="font-light">Follow</p>
          <div className="flex gap-x-8 fill-current text-neutral-800">
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <p className="font-light">
          Kyna Technologies &copy; 2022. All Rights Reserved.
        </p>
        <button
          type="button"
          className="w-60 bg-emerald-500 py-2 font-primary text-lg tracking-widest text-white">
          INQUIRE NOW
        </button>
      </div>
    </footer>
  );
};

export default Footer;

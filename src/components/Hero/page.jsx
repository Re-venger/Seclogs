import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="bg-[#CA958E] mt-4 flex flex-col items-center h-40 justify-center p-4 mb-6">
      <div className="flex flex-col gap-3 mb-2">
        {/* <img src="" alt=""/> */}
        <p className="text-lg font-bold">NullShadow</p>
      </div>
      <p className="text-sm font-serif text-pretty">B.Tech CSE (Spec. Internet of Things) | CyberSecurity </p>
      <p className="text-sm font-serif italic mt-2">Follow Me On</p>
      <div className="flex gap-4 text-xl mt-4">
        {/* social links */}
        <FaLinkedin />
        <FaInstagram />
        <FaGithub />
        <FaTwitter />
        <FaEnvelope />
      </div>
    </div>
  );
};

export default Hero;

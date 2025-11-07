import { Github, Instagram } from "lucide-react";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";

const FooterSection = () => {
  return (
    <div className="w-full h-64 bg-[#0c0c0c] flex justify-evenly items-center flex-wrap rounded-tr-lg rounded-tl-lg">
      <div className="flex items-center gap-4">
        <h2 className="text-neutral-500 font-semibold text-xl">
          <span className="font-light">// made with</span> love.
        </h2>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src="./logo.jpg"
          alt="heykaran logo"
          className="size-6 md:size-8 rounded-full object-cover"
        />
        <a href="https://x.com/heykaran77" target="_blank">
          <h2 className="text-neutral-500 font-semibold text-xl hover:text-orange-400 transition-colors">
            heykaran77
          </h2>
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-neutral-500 text-xl font-semibold hover:text-neutral-200 transition-colors">
          Connect with me:
        </h3>
        <div className="flex items-center gap-4">
          <a href="https://github.com/heykaran77" target="_blank">
            {" "}
            <BsGithub
              size={26}
              className="text-neutral-500 hover:text-orange-400 cursor-pointer transition-colors"
            />
          </a>
          <a href="https://x.com/heykaran77" target="_blank">
            {" "}
            <BsTwitter
              size={26}
              className="text-neutral-500 hover:text-orange-400 cursor-pointer transition-colors"
            />
          </a>

          <a href="https://instagram.com/heykaran77" target="_blank">
            <BsInstagram
              size={26}
              className="text-neutral-500 hover:text-orange-400 cursor-pointer transition-colors"
            />
          </a>
          <a href="https://linkedin.com/in/heykaran77" target="_blank">
            <BsLinkedin
              size={26}
              className="text-neutral-500 hover:text-orange-400 cursor-pointer transition-colors"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

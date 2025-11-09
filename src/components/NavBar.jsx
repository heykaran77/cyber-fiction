import { CircleArrowOutUpRight } from "lucide-react";
import DateTimeDisplay from "./DateTimeDisplay";

const NavBar = ({ className }) => {
  return (
    <div
      className={`w-full px-4 md:px-8 py-4 flex justify-between max-md:items-start`}>
      <div className="flex items-center gap-2">
        <img
          src="./logo.jpg"
          alt="heykaran logo"
          className="size-6 md:size-10 rounded-full object-cover"
        />
        <h2 className="md:text-2xl text-xl font-bold">
          Cyber
          <span
            className="text-transparent stroke-text font-medium"
            style={{
              WebkitTextStroke: "1px black",
            }}>
            Fiction
          </span>
          *
        </h2>
      </div>

      <div className="flex items-center gap-4 max-md:flex-col max-md:gap-0.5">
        <DateTimeDisplay />
        <a href="https://github.com/heykaran77" target="_blank">
          <button className="cursor-pointer font-semibold px-4 py-2 bg-neutral-900 text-3xs text-white rounded-full flex items-center gap-2">
            Github <CircleArrowOutUpRight size={16} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;

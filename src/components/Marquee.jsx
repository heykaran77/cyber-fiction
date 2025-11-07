import { useEffect, useRef } from "react";
import gsap from "gsap";

const Marquee = ({ className }) => {
  const marqueeRef = useRef(null);
  const animations = useRef([]);

  useEffect(() => {
    const ticker = marqueeRef.current;
    const tickertext = document.querySelectorAll(".ticker-text");
    const anims = [];

    tickertext.forEach((el) => {
      const anim = gsap.to(el, {
        x: "-100%",
        repeat: -1,
        duration: 20,
        willChange: "transform",
        ease: "linear",
      });
      anims.push(anim);
    });

    animations.current = anims;
  }, []);

  return (
    <div
      ref={marqueeRef}
      className={`ticker w-full whitespace-nowrap ${className}`}>
      <div className="flex gap-4">
        <div className="ticker-text md:text-[180px] md:tracking-[-8px] uppercase px-6 font-medium text-3xl">
          cyber
          <span
            className="text-transparent stroke-text"
            style={{
              WebkitTextStroke: "2px black",
            }}>
            fiction
          </span>{" "}
          is the <span className="italic">real</span>{" "}
          <span
            className="text-transparent stroke-text"
            style={{
              WebkitTextStroke: "2px black",
            }}>
            story
          </span>{" "}
          in the{" "}
          <span
            className="text-transparent stroke-text italic"
            style={{
              WebkitTextStroke: "2px black",
            }}>
            metaverse
          </span>
          .
        </div>
        <div className="ticker-text md:text-[180px] md:tracking-[-8px] uppercase px-6 font-medium text-3xl">
          cyber
          <span
            className="text-transparent stroke-text"
            style={{
              WebkitTextStroke: "2px black",
            }}>
            fiction
          </span>{" "}
          is the <span className="italic">real</span>{" "}
          <span
            className="text-transparent stroke-text"
            style={{
              WebkitTextStroke: "2px black",
            }}>
            story
          </span>{" "}
          in the{" "}
          <span
            className="text-transparent stroke-text italic"
            style={{
              WebkitTextStroke: "2px black",
            }}>
            metaverse
          </span>
          .
        </div>
      </div>
    </div>
  );
};

export default Marquee;

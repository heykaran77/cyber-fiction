import gsap from "gsap";
import { useEffect } from "react";

const PreLoader = ({ progress, isLoaded, onComplete }) => {
  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        gsap.to(".preloader", {
          translateY: "-100%",
          ease: "power4.out",
          duration: 1,
          onComplete: onComplete,
        });
      }, 1000);
    }
  }, [isLoaded, onComplete]);

  return (
    <div className="preloader w-full h-screen fixed top-0 left-0 bg-[#0c0c0c] z-50 flex justify-end items-end px-8 md:py-8 py-16">
      <h1 className="text-orange-400 text-8xl tracking-tight font-semibold">
        {String(progress).padStart(2, "0")}
      </h1>
    </div>
  );
};

export default PreLoader;

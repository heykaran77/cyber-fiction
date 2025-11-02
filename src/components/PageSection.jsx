import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageSection = ({ id, bgColor, children, className = "" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`h-screen flex items-center justify-center ${bgColor} ${className}`}
      ref={sectionRef}>
      {children || `Page ${id}`}
    </section>
  );
};

export default PageSection;

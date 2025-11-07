import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = marqueeRef.current.scrollWidth;
      gsap.set(marqueeRef.current, { x: 0 });

      // Infinite horizontal loop
      gsap.to(marqueeRef.current, {
        x: `-${totalWidth / 2}`, // move by half width (since duplicated)
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
        },
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-black text-white py-4">
      <div ref={marqueeRef} className="flex marquee-track">
        <div className="flex marquee-item gap-8 text-3xl font-semibold px-8">
          <span>CREATIVE</span>
          <span>DEVELOPER</span>
          <span>DESIGNER</span>
          <span>INNOVATOR</span>
        </div>
        <div className="flex marquee-item gap-8 text-3xl font-semibold px-8">
          <span>CREATIVE</span>
          <span>DEVELOPER</span>
          <span>DESIGNER</span>
          <span>INNOVATOR</span>
        </div>
        <div className="flex marquee-item gap-8 text-3xl font-semibold px-8">
          <span>CREATIVE</span>
          <span>DEVELOPER</span>
          <span>DESIGNER</span>
          <span>INNOVATOR</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;

import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import PageSection from "./components/PageSection";
import { useEffect, useRef } from "react";
import CanvasSequence from "./components/CanvasSequence";
import Marquee from "./components/Marquee";

const App = () => {
  // Lenis Scroll X GSAP Setup
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{ lerp: 0.05, smoothTouch: true, autoRaf: false }}
      ref={lenisRef}>
      <main className="relative overflow-hidden">
        <CanvasSequence />
        <PageSection id={1} bgColor="bg-white" className="relative">
          <Marquee className="absolute top-32" />
          <h2 className="absolute bottom-50 left-10">Build by Karan Singh</h2>
        </PageSection>
        <PageSection id={2} bgColor={"bg-red-500"} />
        <PageSection id={3} bgColor={"bg-yellow-500"} />
        {/* <PageSection id={4} bgColor={"bg-purple-500"} /> */}
      </main>
    </ReactLenis>
  );
};

export default App;

import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import PageSection from "./components/PageSection";
import { useEffect, useRef } from "react";

const App = () => {
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
      options={{ lerp: 0.1, smoothTouch: true, autoRaf: false }}
      ref={lenisRef}>
      <main className="relative overflow-hidden">
        <PageSection id={1} bgColor={"bg-blue-500"} />
        <PageSection id={2} bgColor={"bg-red-500"} />
        <PageSection id={3} bgColor={"bg-yellow-500"} />
        <PageSection id={4} bgColor={"bg-purple-500"} />
        <PageSection id={5} bgColor={"bg-orange-500"} />
      </main>
    </ReactLenis>
  );
};

export default App;

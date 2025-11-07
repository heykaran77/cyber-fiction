import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import PageSection from "./components/PageSection";
import { useEffect, useRef, useState } from "react";
import CanvasSequence from "./components/CanvasSequence";
import Marquee from "./components/Marquee";
import NavBar from "./components/NavBar";
import FooterSection from "./components/FooterSection";
import { usePreLoader } from "./hooks/usePreloader";
import PreLoader from "./components/PreLoader";

const App = () => {
  // Lenis Scroll X GSAP Setup
  const lenisRef = useRef();

  const [showContent, setShowContent] = useState(false);
  const frameCount = 300;
  const framePath = (i) => `/images/male${String(i).padStart(4, "0")}.png`;
  const assets = [];
  for (let i = 1; i <= frameCount; i++) {
    const currentFrame = framePath(i);
    assets.push(currentFrame);
  }

  const { progress, isLoaded } = usePreLoader(assets);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  const handleShowContent = () => {
    setShowContent(true);
  };

  return (
    <ReactLenis
      root
      options={{ lerp: 0.05, smoothTouch: true, autoRaf: false }}
      ref={lenisRef}>
      {!showContent && (
        <PreLoader
          progress={progress}
          isLoaded={isLoaded}
          onComplete={handleShowContent}
        />
      )}

      {showContent && (
        <nav className="fixed top-0 left-0 z-50 w-full">
          <NavBar />
        </nav>
      )}
      <main className="relative overflow-hidden">
        <CanvasSequence />
        <PageSection id={1} bgColor="bg-white" className="relative">
          <Marquee className="absolute top-32 no-anim" />
          <div className="absolute bottom-32 w-full mx-auto p-8 flex justify-between">
            <h2 className="text-xl max-w-96 leading-5">
              In a world where code breathes life into reality, the line between
              human and machine blurs. Every pixel hums with sentience, every
              frame whispers the next evolution.
            </h2>
            <h2 className="text-xl max-w-80 leading-6 text-right flex flex-col gap-2">
              Welcome to CyberFiction — a digital frontier where imagination
              meets intelligence. You’re not just scrolling through a site;
              you’re navigating the future.
              <span className="italic font-semibold">Scroll to read...</span>
            </h2>
          </div>
        </PageSection>
        <PageSection id={2} bgColor={"bg-white"}>
          <div className="w-full h-screen p-8 relative">
            <div className="space-y-6 absolute top-40">
              <h2 className="text-2xl font-light uppercase">
                <span className="font-bold">CYBERFICTION</span> / Coded
                Consciousness
              </h2>
              <p className="max-w-96 text-xl leading-6 font-semibold">
                Beneath neon skies and fractured networks, the system pulses —
                alive, aware, and watching. Here, creativity isn’t built; it’s
                generated.
              </p>
            </div>
            <div className="space-y-6 absolute right-8 bottom-40">
              <h2 className="text-2xl font-light uppercase">
                <span className="font-bold">CYBERFICTION</span> / Synthetic
                Pulse
              </h2>
              <p className="max-w-96 text-xl leading-6 font-semibold text-right">
                Each motion, each render, each particle is a fragment of
                consciousness — crafted by design, guided by code, and powered
                by vision.
              </p>
            </div>
          </div>
        </PageSection>
        <PageSection id={3} bgColor={"bg-white"}>
          <div className="relative p-8 w-full h-screen">
            <div className="absolute top-30">
              <p className="text-xl max-w-96 font-semibold leading-6">
                As the scroll reaches its end, a new world boots up. The past
                dissolves into data, and what remains is evolution —{" "}
                <span className="italic">infinite, adaptive, alive.</span>
              </p>
            </div>
            <div className="absolute right-8 bottom-40 space-y-6">
              <h2 className="uppercase text-2xl">
                <span className="font-semibold">CYBERFICTION</span> / Neural
                Frontier
              </h2>
              <p className="text-xl font-semibold max-w-96 text-right">
                This is more than fiction. It’s a transmission from tomorrow.
                The question is — are you ready to plug in?
              </p>
            </div>
          </div>
        </PageSection>
        <FooterSection />
      </main>
    </ReactLenis>
  );
};

export default App;

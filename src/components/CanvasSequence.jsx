import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CanvasSequence = () => {
  const canvasRef = useRef(null);
  const frameCount = 300;
  const currentFrame = (i) =>
    `/images/male${String(i + 1).padStart(4, "0")}.png`;

  const scaleImage = (img, ctx) => {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const xShift = (canvas.width - img.width * ratio) / 2;
    const yShift = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      xShift,
      yShift,
      img.width * ratio,
      img.height * ratio
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const images = [];
      const imageSequence = { frame: 0 };

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }

      images[0].onload = () => {
        scaleImage(images[0], context);
      };

      gsap.to(imageSequence, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: canvas,
          start: "top top",
          end: "500% top",
          scrub: true,
          pin: true,
        },

        onUpdate: () => {
          scaleImage(images[imageSequence.frame], context);
          console.log(images[imageSequence.frame]);
        },
      });

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        scaleImage(images[imageSequence.frame], context);
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, canvasRef);

    return () => ctx.revert();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-screen object-cover absolute top-0 z-10"></canvas>
  );
};

export default CanvasSequence;

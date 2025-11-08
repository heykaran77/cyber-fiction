import React, { useEffect } from "react";

export default function OnekoCat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./oneko/oneko.js";
    script.dataset.cat = "./oneko/oneko.gif";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // no visible element needed
}

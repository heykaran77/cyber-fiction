import React, { useEffect } from "react";
import { catConfig } from "../configs/CatCon.js";

export default function OnekoCat() {
  useEffect(() => {
    if (catConfig.enabled) {
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
    }
    return () => null;
  }, []);

  return null; // no visible element needed
}

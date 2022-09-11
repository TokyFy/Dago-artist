import React, { useEffect } from "react";
import { Draggable, gsap } from "../utils/vendor/gsap/esm/all";

interface layer {
  elements: React.RefObject<HTMLDivElement>;
  friction: { x: number; y: number };
}

const useParallax = (
  wrapper: React.RefObject<HTMLDivElement>,
  layer: Array<layer>,
) => {
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    const wrapperDim = wrapper.current?.getBoundingClientRect();
    const LayerDim = layer[0].elements.current?.getBoundingClientRect();

    document.addEventListener("mousemove", (e) => {
      const cursor = {
        // Cursor position from the wrapper center
        x: e.clientX - wrapperDim!.width / 2,
        y: e.clientY - wrapperDim!.height / 2,
      };

      const lambda = {
        // Liner interpolation factor between wrapper W/H and the remain extra space
        x: cursor.x / wrapperDim!.width / 2,
        y: cursor.y / wrapperDim!.height / 2,
      };

      layer.forEach((layer) => {
        gsap.to(layer.elements.current, {
          duration: 1.5,
          x: (LayerDim!.x - wrapperDim!.x) * lambda.x * layer.friction.x,
          y: (LayerDim!.y - wrapperDim!.y) * lambda.y * layer.friction.y,
        });
      });
    });
  }, []);
};

export default useParallax;

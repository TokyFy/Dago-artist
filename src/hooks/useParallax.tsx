import React, { useEffect } from "react";
import { Draggable, gsap } from "../utils/vendor/gsap/esm/all";

interface layer {
  elements: React.RefObject<HTMLDivElement>;
  friction: { x: number; y: number };
}

const useParallax = (
  wrapper: React.RefObject<HTMLDivElement>,
  layer: Array<layer>,
  outer: Array<React.RefObject<HTMLDivElement>>,
) => {
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    const wrapperDim = wrapper.current?.getBoundingClientRect();

    const outerRight = outer[0].current?.getBoundingClientRect();
    const outerLeft = outer[1].current?.getBoundingClientRect();
    const outerTop = outer[2].current?.getBoundingClientRect();
    const outerBottom = outer[3].current?.getBoundingClientRect();


    if (wrapperDim && outerRight && outerLeft && outerTop && outerBottom) {
      const alpha = {
        // layer width between the center
        "+x": outerRight.x - wrapperDim.width / 2 + outerRight.width,
        "-x": outerLeft.x - wrapperDim.width / 2,
        "+y": outerTop.y - wrapperDim.height / 2,
        "-y": outerBottom.y - wrapperDim.height / 2 + outerBottom.width, // this should be height, but I can't find out why
      };

      const theta = {
        // wrapper with between the center
        x: wrapperDim.width / 2,
        y: wrapperDim.height / 2,
      };

      const delta = {
        "+x": Math.abs(alpha["+x"]) - theta.x + 100,
        "-x": Math.abs(alpha["-x"]) - theta.x + 100,
        "+y": Math.abs(alpha["+y"]) - theta.y + 100,
        "-y": Math.abs(alpha["-y"]) - theta.y + 100,
      };

      document.addEventListener("mousemove", (e) => {
        const cursor = {
          // Cursor position from the wrapper center
          x: e.clientX - wrapperDim.width / 2,
          y: e.clientY - wrapperDim.height / 2,
        };

        let X = 0;
        let Y = 0;

        if (cursor.x >= 0) {
          X = -(delta["+x"] * cursor.x) / theta.x;
        } else {
          X = -(delta["-x"] * cursor.x) / theta.x;
        }

        if (cursor.y <= 0) {
          Y = -(delta["+y"] * cursor.y) / theta.y;
        } else {
          Y = -(delta["-y"] * cursor.y) / theta.y;
        }

        layer.forEach((layer) => {
          gsap.to(layer.elements.current, {
            ease: "power4.out",
            duration: 10,
            x: X * layer.friction.x,
            y: Y * layer.friction.y,
          });
        });
      });
    }
  }, []);
};

export default useParallax;

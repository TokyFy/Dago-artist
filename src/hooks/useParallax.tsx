import React, { useEffect } from "react";
import { Draggable, gsap, InertiaPlugin } from "../utils/vendor/gsap/esm/all";

interface layer {
  elements: React.RefObject<HTMLDivElement>;
  friction: { x: number; y: number };
}

const useParallax = (
  wrapper: React.RefObject<HTMLDivElement>,
  layer: Array<layer>,
  outer: Array<React.RefObject<HTMLDivElement>>,
  pointerCursor: React.RefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    gsap.registerPlugin(Draggable, InertiaPlugin);
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
        "-y": outerBottom.y - wrapperDim.height / 2 + outerBottom.width, // this should be the height, but I can't find out why
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

      if (pointerCursor && window.matchMedia("(pointer: coarse)").matches) {
        // Override delta
        const delta = {
          "-x": Math.abs(alpha["+x"]) - theta.x + 50,
          "+x": Math.abs(alpha["-x"]) - theta.x + 50,
          "-y": Math.abs(alpha["+y"]) - theta.y + 100,
          "+y": Math.abs(alpha["-y"]) - theta.y + 100,
        };

        Draggable.create(pointerCursor.current, {
          trigger: wrapper.current,
          type: "x,y",
          edgeResistance: 1,
          bounds: wrapper.current,
          inertia: false,
          onMove: () => {
            const cursor = {
              // Cursor position from the wrapper center
              x:
                pointerCursor.current?.getBoundingClientRect().x! -
                wrapperDim.width / 2,
              y:
                pointerCursor.current?.getBoundingClientRect().y! -
                wrapperDim.height / 2,
            };

            let X = 0;
            let Y = 0;

            if (cursor.x >= 0) {
              X = (delta["+x"] * cursor.x) / theta.x;
            } else {
              X = (delta["-x"] * cursor.x) / theta.x;
            }

            if (cursor.y <= 0) {
              Y = (delta["+y"] * cursor.y) / theta.y;
            } else {
              Y = (delta["-y"] * cursor.y) / theta.y;
            }

            layer.forEach((layer) => {
              gsap.to(layer.elements.current, {
                duration: 0.5,
                y: Y * layer.friction.y,
              });

              gsap.to(layer.elements.current, {
                duration: 1,
                x: X * layer.friction.x,
              });
            });
          },
        });
      }
    }
  }, []);
};

export default useParallax;

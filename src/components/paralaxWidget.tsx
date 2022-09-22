import React, { forwardRef } from "react";
import style from "../styles/parallaxWidget.module.scss";

interface props {
  name?: string;
  top: number;
  left: number;
  image: string;
  width: number;
}

const ParallaxWidget = forwardRef<HTMLDivElement, props>(
  ({ name, top, left, image, width }: props, ref) => {
    const degClass = ["_one", "_one_five", "_two", "one", "one_five", "two"][
      Math.floor(Math.random() * 6)
    ];

    return (
      <div
        className={`${style.widget} ${style[degClass]}`}
        style={{
          width: `${width}px`,
          top: `${top}px`,
          left: `${left}px`,
        }}
        ref={ref}
      >
        <img src={image} alt={"Gaelle"} />
        <p className={style.name}>{name}</p>
      </div>
    );
  },
);

export default ParallaxWidget;

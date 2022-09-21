import React, { forwardRef, useState } from "react";
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
    const deg = [-1, -1.5, -2, 1, 1.5, 2][Math.floor(Math.random() * 6)];

    const [rotation, setRotation] = useState(deg);

    return (
      <div
        onMouseEnter={() => {
          setRotation(-rotation);
        }}
        onMouseLeave={() => {
          setRotation(-rotation);
        }}
        className={style.widget}
        style={{
          width: `${width}px`,
          top: `${top}px`,
          left: `${left}px`,
          transform: `rotate(${rotation}deg)`,
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

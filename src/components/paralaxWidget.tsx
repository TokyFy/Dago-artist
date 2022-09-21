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
    return (
      <div
        className={style.widget}
        style={{ width: `${width}px`, top: `${top}px`, left: `${left}px` }}
        ref={ref}
      >
        <img src={image} alt={"Gaelle"} />
        <p className={style.name}>{name}</p>
      </div>
    );
  },
);

export default ParallaxWidget;

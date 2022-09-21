import React, { forwardRef } from "react";
import style from "../styles/parallaxWidget.module.scss";

interface props {
  top: number;
  left: number;
  image: string;
  width: number;
}

const ParallaxWidget = forwardRef<HTMLDivElement, props>(
  ({ top, left, image, width }: props, ref) => {
    return (
      <div
        className={style.widget}
        style={{ width: `${width}px`, top: `${top}px`, left: `${left}px` }}
        ref={ref}
        onClick={() => {
          alert("Hello");
        }}
      >
        <img src={image} alt={"Gaelle"} />
      </div>
    );
  },
);

export default ParallaxWidget;

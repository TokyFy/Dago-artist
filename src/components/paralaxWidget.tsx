import React, { FunctionComponent } from "react";
import style from "../styles/parallaxWidget.module.scss";

interface props {
  top: number;
  left: number;
  image: string;
  width: number;
}

const ParallaxWidget: FunctionComponent<props> = ({
  top,
  left,
  image,
  width,
}) => {
  return (
    <div
      className={style.widget}
      style={{ width: `${width}px`, top: `${top}px`, left: `${left}px` }}
    >
      <img src={image} alt={"Gaelle"} />
    </div>
  );
};

export default ParallaxWidget;

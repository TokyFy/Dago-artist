import React, { FunctionComponent, useRef } from "react";

import { parallaxStyle as style } from "../styles";
import { Header, ParallaxWidget } from "../components";

import {
  TheDizzyDrains,
  gaelle,
  Alala,
  Faniah,
  kristel,
  Andriaina,
  Nuiraza,
  Loharano,
  JohnOabmar,
  MikasyDavis,
  Imiaingaly,
  mafonja,
} from "../image";

import useParallax from "../hooks/useParallax";

const Parallax: FunctionComponent = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const layer0 = useRef<HTMLDivElement>(null);
  const layer1 = useRef<HTMLDivElement>(null);
  const layer2 = useRef<HTMLDivElement>(null);

  useParallax(wrapper, [
    {
      elements: layer0,
      friction: {
        x: 0.9,
        y: 0.825,
      },
    },
    {
      elements: layer1,
      friction: {
        x: 0.825,
        y: 0.825,
      },
    },
    {
      elements: layer2,
      friction: {
        x: 0.825,
        y: 0.9,
      },
    },
  ]);

  return (
    <div className={style.wrapper} ref={wrapper}>
      <div className={`${style.layer} ${style.layer0}`} ref={layer0}>
        <div className={style.center}>
          <div className={style.headerWrapper}>
            <Header>
              A strange art – music – the most poetic and precise of all the arts ...
            </Header>
          </div>

          <ParallaxWidget top={255} left={-645} image={Loharano} width={220} />
          <ParallaxWidget top={-335} left={-505} image={JohnOabmar} width={220} />
          <ParallaxWidget top={165} left={-25} image={TheDizzyDrains} width={220} />
          <ParallaxWidget top={-385} left={475} image={MikasyDavis} width={220} />
        </div>
      </div>

      <div className={`${style.layer} ${style.layer1}`} ref={layer1}>
        <div className={style.center}>
          <ParallaxWidget top={-385} left={-185} image={kristel} width={220} />
          <ParallaxWidget top={-75} left={-805} image={Faniah} width={220} />
          <ParallaxWidget top={-75} left={285} image={gaelle} width={220} />
          <ParallaxWidget top={325} left={-305} image={Imiaingaly} width={220} />
        </div>
      </div>

      <div className={`${style.layer} ${style.layer2}`} ref={layer2}>
        <div className={style.center}>
          <ParallaxWidget top={-355} left={135} image={Nuiraza} width={220} />
          <ParallaxWidget top={-45} left={-445} image={Alala} width={220} />
          <ParallaxWidget top={235} left={315} image={mafonja} width={220} />
          <ParallaxWidget top={15} left={595} image={Andriaina} width={220} />
        </div>
      </div>
    </div>
  );
};

export default Parallax;

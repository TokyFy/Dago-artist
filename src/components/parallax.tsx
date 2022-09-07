import React, { FunctionComponent } from "react";
import style from "../styles/paralax.module.scss";
import Header from "./Header";
import ParallaxWidget from "./paralaxWidget";

import gaelle from "../image/Gaelle tsirinofy.jpg";
import Alala from "../image/Alala.jpg";
import Andriaina from "../image/Andriaina.jpg";
import Faniah from "../image/Faniah.jpeg";
import Imiaingaly from "../image/Imiangaly.jpeg";
import JohnOabmar from "../image/JohnOambar.jpg";
import kristel from "../image/kristel.jpeg";
import Loharano from "../image/Loharano.jpg";
import MikasyDavis from "../image/MikasyDavis.png";
import Nuiraza from "../image/NuiRaza.jpg";
import TheDizzyDrains from "../image/The Dizzy Brains.jpg";
import Zay from "../image/Zay.jpg";

const Parallax: FunctionComponent = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${style.layer} ${style.layer0}`}>
        <Header primary={"Dago"} second={"Artist"} />
      </div>
      <div className={`${style.layer} ${style.layer1}`}>
        <div className={style.center}>
          <ParallaxWidget image={Alala} top={-390} left={-300} width={265} />
          <ParallaxWidget image={Andriaina} top={132} left={-13} width={290} />
          <ParallaxWidget image={Faniah} top={80} left={-440} width={260} />
          <ParallaxWidget
            image={Imiaingaly}
            top={-315}
            left={190}
            width={280}
          />
          <ParallaxWidget
            image={JohnOabmar}
            top={-310}
            left={-700}
            width={274}
          />
          <ParallaxWidget image={kristel} top={-700} left={80} width={310} />
          <ParallaxWidget image={Loharano} top={150} left={-860} width={290} />
          <ParallaxWidget image={MikasyDavis} top={120} left={90} width={350} />
          <ParallaxWidget image={Nuiraza} top={-650} left={-620} width={250} />
          <ParallaxWidget
            image={TheDizzyDrains}
            top={46}
            left={452}
            width={324}
          />
          <ParallaxWidget image={Zay} top={500} left={150} width={270} />
          <ParallaxWidget image={gaelle} top={430} left={-390} width={280} />
        </div>
      </div>
    </div>
  );
};

export default Parallax;

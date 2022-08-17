import React from "react";
import style from "../styles/artistCard.module.scss";

interface ArtistCardProps {
  name?: string;
  img?: string;
  genre?: string;
}

const ArtistCards: React.FC<ArtistCardProps> = ({ name, img, genre }) => {
  return (
    <div className={style.artistCard}>
      <p className={style.artistName}>{name}</p>
      <img src={img} alt={name} />
      <div className={style.genre}>
        <p>{genre}</p>
      </div>
    </div>
  );
};

export default ArtistCards;

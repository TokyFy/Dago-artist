import style from "../styles/Header.module.scss";

function Header({ primary, second }: { primary: string; second: string }) {
  return (
    <h1 className={style.Header}>
      <span className={style.primary}>{primary}</span> <br /> {second}
    </h1>
  );
}

export default Header;

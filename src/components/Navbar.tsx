import styles from "../styles/Navbar.module.scss";
import logo from "../image/logo.svg";
import HumberMenu from "./humbergerMenu";

function Navbar() {
  return (
    <div className={`${styles.Header}`}>
      <div className={styles.logo}>
        <img src={logo} alt="toky" />
      </div>
      <div className={styles.humberMenu}>
        <HumberMenu />
      </div>
    </div>
  );
}

export default Navbar;

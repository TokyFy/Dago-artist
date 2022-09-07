import styles from "../styles/Navbar.module.scss";
import logo from "../image/logo.svg";
import HumberMenu from "./humbergerMenu";
import Layouts from "../styles/Layout.module.scss";

function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.Header} ${Layouts.row}`}>
        <div className={styles.logo}>
          <img src={logo} alt="toky" />
        </div>
        <div className={styles.humberMenu}>
          <HumberMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

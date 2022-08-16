import Style from "../styles/BurgerMenuStyle.module.scss";

function BurgerMenu() {
  return (
    <label className={Style.HumberMenu}>
      <input type="checkbox" id="check" />
      <span> </span>
      <span> </span>
      <span> </span>
    </label>
  );
}

export default BurgerMenu;

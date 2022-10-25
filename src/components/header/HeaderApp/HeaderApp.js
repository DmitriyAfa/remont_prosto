import styles from "./HeaderApp.module.scss";
import HeaderCarousel from "../HeaderCarousel/HeaderCarousel";
import HeaderNavMain from "../HeaderNavMain/HeaderNavMain";
export const HeaderApp = () => {
  return (
    <header className={styles.HeaderApp}>
      <HeaderNavMain />
      {/* <HeaderCarousel /> */}
    </header>
  );
};

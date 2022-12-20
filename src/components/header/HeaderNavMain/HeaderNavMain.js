import styles from "./HeaderNavMain.module.scss";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import icon from "../../../assets/image/icons/phone-call.png";
const HeaderNavMain = () => {
  return (
    <>
      <div className={styles.HeaderNavMain}>
        <span className={styles.logo}>Ремонт просто</span>
        <div className={styles.nav}>
          <HeaderNavbar />
        </div>
        <span className={styles.phone}>
          <img
            className={styles.icon}
            src={icon}
            alt="phone"
            width={20}
            height={20}
          />
          <p>+7 999 999 999</p>
        </span>
      </div>
    </>
  );
};

export default HeaderNavMain;

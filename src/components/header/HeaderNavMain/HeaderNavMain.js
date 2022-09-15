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
            width={13}
            height={13}
          />
          <p>+7 (495) 755-02-29</p>
        </span>
      </div>
    </>
  );
};

export default HeaderNavMain;

import styles from "./FooterApp.module.scss";
import FooterNavbar from "../FooterNavbar/FooterNavbar";
import icon from "../../assets/image/icons/phone-call.png";
import iconVK from "../../assets/image/icons/vk.png";
import iconT from "../../assets/image/icons/telegram.png";

export const FooterApp = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <p className={styles.subtitle}>Ремонт просто</p>
        <p className={styles.content}>Уют в вашей кваритре</p>
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
      <FooterNavbar />
      <div className={styles.contacts}>
        <a href="https://vk.com/" target="_blank">
          <img
            className={styles.icon}
            width={13}
            height={13}
            src={iconVK}
            alt="vk"
          />
        </a>

        <a href="https://web.telegram.org/" target="_blank">
          <img
            className={styles.icon}
            width={13}
            height={13}
            src={iconT}
            alt="telegram"
          />
        </a>
      </div>
      <div className={styles.bottom}>
        <p className={styles.content}>Ремонт просто.</p>
        <p className={styles.content}>
          Все права защищены 2021. Ремонт с 2015 года.
        </p>
      </div>
    </footer>
  );
};

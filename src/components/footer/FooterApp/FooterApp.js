import styles from "./FooterApp.module.scss";
import FooterNavbar from "../FooterNavbar/FooterNavbar";
import icon from "../../../assets/image/icons/phone-call.png";
import iconVK from "../../../assets/image/icons/vk.png";
import iconT from "../../../assets/image/icons/telegram.png";
import { URL_VK } from "../../../assets/constans/constans";

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
            width={20}
            height={20}
          />
          <p>+7 999 999 999</p>
        </span>
      </div>
      <FooterNavbar />
      <div className={styles.contacts}>
        <a href={URL_VK} target="_blank">
          <img
            className={styles.icon}
            width={35}
            height={35}
            src={iconVK}
            alt="vk"
          />
        </a>

        <a href="https://web.telegram.org/" target="_blank">
          <img
            className={styles.icon}
            width={35}
            height={35}
            src={iconT}
            alt="telegram"
          />
        </a>
      </div>
      <div className={styles.bottom}>
        <p style={{ marginRight: "5px" }} className={styles.content}>
          Ремонт просто.
        </p>
        <p className={styles.content}>
          Все права защищены 2022. Ремонт с 2012 года.
        </p>
      </div>
    </footer>
  );
};

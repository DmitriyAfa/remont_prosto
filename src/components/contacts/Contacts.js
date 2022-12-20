import styles from "./Contacts.module.scss";
import { PageLayout } from "../PageLayout/PageLayout";
import { Image } from "antd";
import qrImg from "./qr.jpg";
import icon from "../../assets/image/icons/phone-call.png";
import iconVK from "../../assets/image/icons/vk.png";
import iconT from "../../assets/image/icons/telegram.png";
import { URL_VK } from "../../assets/constans/constans";
export const Contacts = () => {
  return (
    <PageLayout header="Контакты" to="/" toContent="На главную">
      <section className={styles.wrapper}>
        <ul className={styles.card}>
          <p className={styles.phone}>+7 999 999 999</p>
        </ul>
        <ul className={styles.card}>
          <p className={styles.title}>QR-код VK</p>
          <Image width={300} height={300} src={qrImg} />
        </ul>
        <div className={styles.cards}>
          <ul className={styles.card}>
            <p className={styles.title}>Мы вконтакте</p>
            <li className={styles.icon}>
              <a href={URL_VK} target="_blank">
                <img width={35} height={35} src={iconVK} alt="vk" />
              </a>
            </li>
          </ul>
          <ul className={styles.card}>
            <p className={styles.title}>Мы телеграме</p>
            <li className={styles.icon}>
              <a href="https://web.telegram.org/" target="_blank">
                <img width={35} height={35} src={iconT} alt="telegram" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </PageLayout>
  );
};

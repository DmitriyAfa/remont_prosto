import styles from "./Contacts.module.scss";
import { PageLayout } from "../PageLayout/PageLayout";
import { Image } from "antd";
import qrImg from "./qr.jpg";
import icon from "../../assets/image/icons/phone-call.png";
import iconVK from "../../assets/image/icons/vk.png";
import iconT from "../../assets/image/icons/telegram.png";
export const Contacts = () => {
  return (
    <PageLayout header="Контакты" to="/" toContent="На нглавную">
      <section className={styles.wrapper}>
        <p className={styles.title}>Наш номер</p>
        <ul className={styles.cards}>
          <li className={styles.card}>
            <p>+7 (495) 755-02-29</p>
          </li>
        </ul>
      </section>
      <section className={styles.wrapper}>
        <p className={styles.title}>Мы вконтакте</p>
        <ul className={styles.cards}>
          <li className={styles.icon}>
            <a href="https://vk.com/" target="_blank">
              <img width={35} height={35} src={iconVK} alt="vk" />
            </a>
          </li>
          <li className={styles.card}>
            <Image width={150} height={150} src={qrImg} />
          </li>
        </ul>
      </section>
      <section className={styles.wrapper}>
        <p className={styles.title}>Мы телеграме</p>
        <ul className={styles.cards}>
          <li className={styles.icon}>
            <a href="https://web.telegram.org/" target="_blank">
              <img width={35} height={35} src={iconT} alt="telegram" />
            </a>
          </li>
        </ul>
      </section>
    </PageLayout>
  );
};

import styles from "./FirstSection.module.scss";
import image from "../../../assets/image/projects/0/kitchen.jpg";
const FirstSection = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>
        Компания "Ремонт просто" осуществляет евроремонт и ремонт квартир в
        Екатеринбурге и области.
      </p>
      <img src={image} className={styles.img} />
      <p className={styles.s1}>
        Чтобы ремонт не превратился в серьёзное испытание, доверьте выполнение
        ремонтно-строительных работ профессионалам. Ремонт квартир Екатеринбург
        доверяет компании "Ремонт просто".
      </p>
      <p className={styles.s2}>
        Мы выполняем весь спектр ремонтных услуг на всех этапах, от оценки и
        разработки до отделочных работ. Результаты наших работ зарекомендовали
        "Ремонт просто" как настоящих профессионалов в области ремонта квартир.
      </p>
      <p className={styles.s3}>
        Клиенты ценят нас за внимательное отношение к пожеланиям заказчиков и
        исполнительность. Наши мастера выполняют ремонт квартир с полным
        соблюдением договора и установленного срока. При ремонте квартир
        Екатеринбургу мы предоставляем гарантии и полностью выполняем свои
        обязательства. Клиенты могут быть уверены в высоком результате ремонта
        квартир.
      </p>
    </section>
  );
};

export default FirstSection;
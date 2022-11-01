import React from "react";
import { Carousel } from "antd";
import styles from "./HeaderCarousel.module.scss";
import "antd/dist/antd.css";

const HeaderCarousel = () => (
  <Carousel autoplay effect="fade" dotPosition="left">
    <div className={styles.card}>
      <div className={styles.content}>
        <h1>С нами ремонт - это просто !</h1>
        <p>
          С одинаковым уровнем качества мы сделаем ремонт в любых жилых и
          нежилых помещениях. Работаем с разными бюджетами и проектами разного
          уровня – от эконома до квартир премиум-класса.
        </p>
      </div>
      <div className={styles.background}></div>
      <div className={styles.b1}></div>
    </div>
    <div className={styles.card}>
      <div className={styles.content}>
        <h1>С нами ремонт - это просто !</h1>
        <p>
          Мы придерживаемся прозрачности в ценовой политике и открытости во
          взаимоотношениях с клиентами.
        </p>
      </div>
      <div className={styles.background}></div>
      <div className={styles.b2}></div>
    </div>
    <div className={styles.card}>
      <div className={styles.content}>
        <h1>С нами ремонт - это просто !</h1>
        <p>
          Учтём все Ваши пожелания. Обсудим Ваши идеи и поделимся своим опытом.
        </p>
      </div>
      <div className={styles.background}></div>
      <div className={styles.b3}></div>
    </div>
  </Carousel>
);

export default HeaderCarousel;

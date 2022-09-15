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
          С равным успехом мы работаем на участках строительства технически
          сложных и ответственных объектов, и типовых сооружений. Все работы
          проходят государственную экспертизу.
        </p>
      </div>
      <div className={styles.background}></div>
      <div className={styles.b1}></div>
    </div>
    <div className={styles.card}>
      <div className={styles.content}>
        <h1>С нами ремонт - это просто !</h1>
        <p>
          С равным успехом мы работаем на участках строительства технически
          сложных и ответственных объектов, и типовых сооружений. Все работы
          проходят государственную экспертизу.
        </p>
      </div>
      <div className={styles.background}></div>
      <div className={styles.b2}></div>
    </div>
    <div className={styles.card}>
      <div className={styles.content}>
        <h1>С нами ремонт - это просто !</h1>
        <p>
          С равным успехом мы работаем на участках строительства технически
          сложных и ответственных объектов, и типовых сооружений. Все работы
          проходят государственную экспертизу.
        </p>
      </div>
      <div className={styles.background}></div>
      <div className={styles.b3}></div>
    </div>
  </Carousel>
);

export default HeaderCarousel;

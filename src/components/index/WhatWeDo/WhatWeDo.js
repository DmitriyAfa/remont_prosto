import styles from "./WhatWeDo.module.scss";
import SectionLayout from "../../SectionLayout/SectionLayout";

export const WhatWeDo = ({ data }) => {
  const { header, title, cards } = data;
  return (
    <SectionLayout header={header}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        <div className={styles.cards}>
          {cards.map(({ alt, img, subtitle, content, id }) => {
            return (
              <div key={id} className={styles.card}>
                <div className={styles.img}>
                  <img alt={alt} src={img} />
                </div>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <p className={styles.content}>
                  {content.split("/").map((chapter) => {
                    return (
                      <>
                        {chapter}
                        <hr />
                      </>
                    );
                  })}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionLayout>
  );
};

import styles from "./AboutUsSection.module.scss";
import SectionLayout from "../../SectionLayout/SectionLayout";
export const AboutUsSection = ({ data }) => {
  const { header, title, cards } = data;
  return (
    <SectionLayout header={header}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        <ul className={styles.cards}>
          {cards.map(({ subtitle, content, id }) => {
            return (
              <li key={id} className={styles.card}>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <p className={styles.content}>{content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </SectionLayout>
  );
};

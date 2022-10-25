import styles from "./BenefitsSection.module.scss";
const BenefitsSection = ({ info }) => {
  const { title, cards } = info;
  console.log();
  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.cards}>
        {cards &&
          cards.map(({ subtitle, content, id }) => {
            return (
              <li key={id} className={styles.card}>
                <p className={styles.subtitle}>{subtitle}</p>
                <p className={styles.content}>{content}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default BenefitsSection;

import styles from "./Contacts.module.scss";
export const Contacts = ({ data }) => {
  const { title, cards } = data;
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

import styles from "./SectionLayout.module.scss";

const SectionLayout = ({ header, children }) => {
  return (
    <section className={styles.SectionLayout}>
      <h2>{header}</h2>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
};

export default SectionLayout;

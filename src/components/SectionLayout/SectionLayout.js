import { useLocation } from "react-router-dom";
import styles from "./SectionLayout.module.scss";

const SectionLayout = ({ header, children }) => {
  const { pathname } = useLocation();

  return (
    <section
      className={
        pathname === "/"
          ? `${styles.SectionLayout} ${styles.index}`
          : styles.SectionLayout
      }
    >
      <h2>{header}</h2>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
};

export default SectionLayout;

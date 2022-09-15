import styles from "./ProjectCard.module.scss";
import { Link } from "react-router-dom";
export const ProjectCard = ({ src, header, content, to }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={src} alt="Ремонт екатеринбург" />
      <div className={styles.content}>
        <div>
          <h3>{header}</h3>
          <p>{content}</p>
        </div>

        <Link to={to} className={styles.link}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

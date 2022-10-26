import styles from "./PageLayout.module.scss";
import imgArrowLeft from "../../assets/image/FourthSectionMain/ArrowLeft.png";
import { Link } from "react-router-dom";

export const PageLayout = ({
  header,
  to,
  toContent,
  children,
  isGallery = false,
}) => {
  return (
    <div
      className={`${styles.PageLayout} ${isGallery ? styles.gallery : null}`}
    >
      <div className={styles.header}>
        <h2>{header}</h2>
        <Link to={to} className={styles.link}>
          <span>
            <img
              className={styles.left}
              src={imgArrowLeft}
              alt="стрелка влево"
              width={30}
              height={10}
            />
            <p>{toContent}</p>
          </span>
        </Link>
      </div>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

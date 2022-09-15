import styles from "./GalleryLayout.module.scss";

export const GalleryLayout = ({ src, header, content }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={src} alt="Ремонт екатеринбург" />
      <div className={styles.content}>
        <div>
          <h3>{header}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

import styles from "./GalleryLayout.module.scss";

export const GalleryLayout = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      {images &&
        images.map(({ src }) => {
          return (
            <li key={src} className={styles.item}>
              <img src={src} />
            </li>
          );
        })}
    </ul>
  );
};

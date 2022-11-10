import { Image } from "antd";
import styles from "./GalleryLayout.module.scss";

export const GalleryLayout = ({ images }) => {
  return (
    <ul className={styles.gallery}>
      {images &&
        images.map(({ src, id }) => {
          return (
            <li key={id} className={styles.item}>
              <Image src={src} />
            </li>
          );
        })}
    </ul>
  );
};

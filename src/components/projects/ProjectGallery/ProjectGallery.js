import styles from "./ProjectGallery.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectGalleryConst } from "../consts";
import { PageLayout } from "../../PageLayout/PageLayout";
import { GalleryLayout } from "../GalleryLayout/GalleryLayout";
export const ProjectGallery = () => {
  const [cards, setCards] = useState(null);
  const [header, setHeader] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const projects = projectGalleryConst.filter((card) => card.id == id);
    setCards(projects[0].cards);
    setHeader(projects[0].address);
  }, [id, projectGalleryConst]);

  return (
    <div className={styles.wrapper}>
      <PageLayout
        // isGallery={true}
        header={header}
        to={"/projects"}
        toContent="К проектам"
      >
        {cards && <GalleryLayout images={cards} />}
      </PageLayout>
    </div>
  );
};

/**
 const [cards, setCards] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const projects = projectGalleryConst.filter((card) => card.id == id);
    setCards(projects[0].cards);
  }, [id, projectGalleryConst]);

  const addresses =
    id == 0 ? "Такой-то адресс" : id == 1 ? "Такой-то адресс №2" : "Адресс";

  return (
    <div className={styles.wrapper}>
      <PageLayout header={addresses} to={"/projects"} toContent="К проектам">
        {cards
          ? cards.map((card, id) => (
              <GalleryLayout
                src={card.src}
                header={card.header}
                to={"projects"}
                content={card.content}
              />
            ))
          : null}
      </PageLayout>
    </div>
  );
 */

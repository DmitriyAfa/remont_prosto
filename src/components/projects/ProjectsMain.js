import styles from "./Projects.module.scss";
import { PageLayout } from "../PageLayout/PageLayout";
import { ProjectCard } from "./ProjectCard/ProjectCard";

import { projectCards } from "./consts";

export const ProjectsMain = () => {
  const cards = projectCards.map((card) => (
    <ProjectCard
      key={card.id}
      src={card.src}
      header={card.header}
      to={card.id}
      content={card.content}
    />
  ));
  return (
    <main className={styles.wrapper}>
      <PageLayout header={"Проекты"} to={"/"} toContent="На главную">
        {cards}
      </PageLayout>
    </main>
  );
};

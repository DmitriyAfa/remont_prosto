import styles from "./Projects.module.scss";
import { PageLayout } from "../PageLayout/PageLayout";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { projectCardConsts } from "../../assets/constans/constans";

export const ProjectsMain = () => {
  const cards = projectCardConsts.map((card) => (
    <ProjectCard
      key={card.id}
      src={card.src}
      header={card.header}
      to={card.id}
      content={card.content}
    />
  ));
  return (
    <div className={styles.wrapper}>
      <PageLayout header={"Проекты"} to={"/"} toContent="На главную">
        {cards}
      </PageLayout>
    </div>
  );
};

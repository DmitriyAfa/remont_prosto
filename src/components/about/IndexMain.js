import styles from "./AboutMain.module.scss";
import FirstSection from "./FirstSection/FirstSection";
import BenefitsSection from "./BenefitsSection/BenefitsSection";
import { PageLayout } from "../PageLayout/PageLayout";
import { benefitsSection } from "./consts";
export const AboutMain = () => {
  return (
    <main className={styles.wrapper}>
      <PageLayout header={"О нас"} to={"/"} toContent="На главную">
        <FirstSection />
        <BenefitsSection info={benefitsSection} />
      </PageLayout>
    </main>
  );
};

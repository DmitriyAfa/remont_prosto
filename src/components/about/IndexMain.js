import styles from "./AboutMain.module.scss";
import FirstSection from "./FirstSection/FirstSection";
import SecondSectionMain from "./SecondSectionMain/SecondSectionMain";
import ThirdSectionMain from "./ThirdSectionMain/ThirdSectionMain";
import FourthSectionMain from "./FourthSectionMain/FourthSectionMain";
import BenefitsSection from "./BenefitsSection/BenefitsSection";
import SixthSectionMain from "./SixthSectionMain/SixthSectionMain";
import { PageLayout } from "../PageLayout/PageLayout";
import { benefitsSection } from "./consts";
export const AboutMain = () => {
  return (
    <main className={styles.wrapper}>
      <PageLayout header={"О нас"} to={"/"} toContent="На главную">
        <FirstSection />
        {/* <SecondSectionMain />
        <ThirdSectionMain />
        <FourthSectionMain /> */}
        <BenefitsSection info={benefitsSection} />
        {/* <SixthSectionMain /> */}
      </PageLayout>
    </main>
  );
};

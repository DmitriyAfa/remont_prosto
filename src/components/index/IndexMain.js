import styles from "./IndexMain.module.scss";
import FirstSectionMain from "./FirstSectionMain/FirstSectionMain";
import SecondSectionMain from "./SecondSectionMain/SecondSectionMain";
import ThirdSectionMain from "./ThirdSectionMain/ThirdSectionMain";
import FourthSectionMain from "./FourthSectionMain/FourthSectionMain";
import FifthSectionMain from "./FifthSectionMain/FifthSectionMain";
import SixthSectionMain from "./SixthSectionMain/SixthSectionMain";
export const IndexMain = () => {
  return (
    <main className={styles.wrapper}>
      <FirstSectionMain />
      <SecondSectionMain />
      <ThirdSectionMain />
      <FourthSectionMain />
      <FifthSectionMain />
      <SixthSectionMain />
    </main>
  );
};

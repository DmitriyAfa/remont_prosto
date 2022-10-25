import styles from "./IndexMain.module.scss";
import FirstSection from "./FirstSection/FirstSection";
import { WhatWeDo } from "./WhatWeDo/WhatWeDo";
import ThirdSectionMain from "./ThirdSectionMain/ThirdSectionMain";
import FourthSectionMain from "./FourthSectionMain/FourthSectionMain";
import FifthSectionMain from "./FifthSectionMain/FifthSectionMain";
import SixthSectionMain from "./SixthSectionMain/SixthSectionMain";
import { whatWeDo } from "./consts";
export const IndexMain = () => {
  return (
    <main className={styles.wrapper}>
      <FirstSection />
      <WhatWeDo data={whatWeDo} />
      {/* <ThirdSectionMain /> */}
      <FourthSectionMain />
      <FifthSectionMain />
      <SixthSectionMain />
    </main>
  );
};

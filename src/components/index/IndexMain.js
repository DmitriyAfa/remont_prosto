import styles from "./IndexMain.module.scss";
import FirstSection from "./FirstSection/FirstSection";
import { WhatWeDo } from "./WhatWeDo/WhatWeDo";
import ThirdSectionMain from "./ThirdSectionMain/ThirdSectionMain";
import { HowWeWork } from "./HowWeWork/HowWeWork";
import { AboutUsSection } from "./AboutUsSection/AboutUsSection";
import { Questions } from "./Questions/Questions";
import { whatWeDo, aboutUsSection } from "./consts";
import { sixthSectionMainConsts } from "./consts";
export const IndexMain = () => {
  return (
    <main className={styles.wrapper}>
      <FirstSection />
      <WhatWeDo data={whatWeDo} />
      <HowWeWork />
      <AboutUsSection data={aboutUsSection} />
      <Questions data={sixthSectionMainConsts} />
    </main>
  );
};

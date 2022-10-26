import { useState } from "react";
import imgArrowLeft from "../../../assets/image/FourthSectionMain/ArrowLeft.png";
import imgArrowRight from "../../../assets/image/FourthSectionMain/ArrowRight.png";
import styles from "./HowWeWork.module.scss";
import SectionLayout from "../../SectionLayout/SectionLayout";
import "antd/dist/antd.css";
import { Steps } from "antd";
import { howWeWork } from "../consts";
const { Step } = Steps;

const { steps } = howWeWork;

export const HowWeWork = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < steps.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };
  return (
    <SectionLayout header={"КАК МЫ РАБОТАЕТ"}>
      <div className={styles.wrapper}>
        <div className={styles.steps}>
          <Steps current={current} direction="vertical">
            {steps.map(({ id, title }) => (
              <Step onClick={() => setCurrent(id)} key={id} title={title} />
            ))}
          </Steps>
        </div>

        <div className={styles.content}>
          {steps[current].content}
          <div className={styles.action}>
            <img
              className={styles.left}
              src={imgArrowLeft}
              onClick={() => prev()}
              alt="стрелка влево"
              width={30}
              height={10}
            />
            <img
              src={imgArrowRight}
              onClick={() => next()}
              alt="стрелка вправо"
              width={30}
              height={10}
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

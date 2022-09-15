import styles from "./SixthSectionMain.module.scss";
import SectionLayout from "../../SectionLayout/SectionLayout";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import { sixthSectionMainConsts } from "../../../assets/constans/constans";
const { Panel } = Collapse;
const { items } = sixthSectionMainConsts;

const SixthSectionMain = () => {
  return (
    <SectionLayout header={"Не нашли свой вопрос? Свяжитесь с нами!"}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Чем мы будем вам полезны</p>
        <div className={styles.cards}>
          <Collapse accordion>
            {items.map(({ header, key, text }) => {
              return (
                <Panel header={header} key={key}>
                  <p>{text}</p>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    </SectionLayout>
  );
};

export default SixthSectionMain;

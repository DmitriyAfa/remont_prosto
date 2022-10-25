import styles from "./Questions.module.scss";
import SectionLayout from "../../SectionLayout/SectionLayout";
import "antd/dist/antd.css";
import { Collapse } from "antd";
const { Panel } = Collapse;

export const Questions = ({ data }) => {
  const { header, title, items } = data;
  return (
    <SectionLayout header={header}>
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
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

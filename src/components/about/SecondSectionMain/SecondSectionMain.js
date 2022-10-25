import styles from "./SecondSectionMain.module.scss";
import SectionLayout from "../../SectionLayout/SectionLayout";
import img1 from "../../../assets/image/SecondSectionMain/1.png";
import img2 from "../../../assets/image/SecondSectionMain/2.png";
import img3 from "../../../assets/image/SecondSectionMain/3.png";
const SecondSectionMain = () => {
  return (
    <SectionLayout header={"ВИДЫ РЕМОНТНЫХ РАБОТ"}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Чем мы будем вам полезны</p>
        <div className={styles.cards}>
          <div className={styles.s1}>
            <div className={styles.img}>
              <div>
                <img alt="Ремонт Екатеринбург" src={img1} />
              </div>
            </div>
            <h3 className={styles.c1}>Геологические</h3>
            <p className={styles.c2}>
              Получение востребованных материалов исследований для обоснования
              возможностей проектирования и стройки в существующей геологической
              ситуации
            </p>
          </div>
          <div className={styles.s2}>
            <div className={styles.img}>
              <div>
                <img alt="Ремонт Екатеринбург" src={img2} />
              </div>
            </div>
            <h3 className={styles.c1}>Геодезические</h3>
            <p className={styles.c2}>
              Комплексные мероприятия по изучению и анализу ситуационных данных
              о рельефе земельного участка, его гидросети, растительности,
              текущем использовании, наличии и расположении зданий и сооружений,
              линейных объектов, наземных и подземных коммуникаций
            </p>
          </div>
          <div className={styles.s3}>
            <div className={styles.img}>
              <div>
                <img alt="Ремонт Екатеринбург" src={img3} />
              </div>
            </div>
            <h3 className={styles.c1}>Экологические</h3>
            <p className={styles.c2}>
              Мероприятия по изучению и мониторингу текущего состояния
              окружающей среды, прогнозирование вероятных негативных изменений
              экосистемы от социально-экономических факторов и техногенной
              нагрузки
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default SecondSectionMain;

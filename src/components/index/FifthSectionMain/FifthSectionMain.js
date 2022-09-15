import styles from "./FifthSectionMain.module.scss";
import SectionLayout from "../../SectionLayout/SectionLayout";
const FifthSectionMain = () => {
  return (
    <SectionLayout header={"ВЫСОКИЙ УРОВЕНЬ И ПРОФЕССИОНАЛЬНАЯ КОМАНДА"}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Чем мы будем вам полезны</p>
        <div className={styles.cards}>
          <div className={styles.s1}>
            <h3 className={styles.c1}>30 лет работы</h3>
            <p className={styles.c2}>
              Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности
              для нас это пустяк
            </p>
          </div>
          <div className={styles.s2}>
            <h3 className={styles.c1}>Выполняем комплекс работ</h3>
            <p className={styles.c2}>
              Мы проводим весь необходимый комплекс работ для каждого объекта.
              Это гарантирует 100% прохождение экспертизы
            </p>
          </div>
          <div className={styles.s3}>
            <h3 className={styles.c1}>Команда профессионалов</h3>
            <p className={styles.c2}>
              В нашей профессиональной команде 13 высококвалифицированных
              специалистов
            </p>
          </div>
          <div className={styles.s4}>
            <h3 className={styles.c1}>Огромный опыт</h3>
            <p className={styles.c2}>
              Мы обладаем огромным опытом и собственной уникальной базой
              пройденных скважин. Это позволяет нам предвидеть проблемы
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FifthSectionMain;

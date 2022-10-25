import styles from "./ThirdSectionMain.module.scss";
import SectionLayout from "../../SectionLayout/SectionLayout";
const ThirdSectionMain = () => {
  return (
    <SectionLayout header={"ЗАКАЗАТЬ ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ"}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Описание заказа инженерных изысканий</p>
        <p className={styles.s1}>
          Заказать инженерные изыскания для строительства у нашей компании можно
          как в комплексе исследований, так и отдельными видами работ.
        </p>
        <p className={styles.s2}>
          Проведение изысканий под строительство полным циклом значительно
          снизит стоимость инженерных изысканий и сократит сроки. НПО «НОЭКС»
          отвечает за качество исследований и берет на себя ответственность за
          проделанный труд.
        </p>
        <p className={styles.s3}>
          Подписав договор, застройщик застрахован от непредвиденных
          последствий. К услугам заказчика неординарный интеллект и слаженные
          действия профессиональной команды, укомплектованный парк буровой
          техники, оснащенная лаборатория и фонд архивных документов.
        </p>
        <p className={styles.s4}>
          Стоимость инженерных изысканий в Москве и Подмосковье рассчитывается
          индивидуально, в зависимости от объемов технического задания и
          срочности выполнения, удаленности участка, сложности рельефа и
          геологической ситуации.
        </p>
        <p className={styles.s5}>
          Предлагаем заказать изыскания для строительства в нашем
          профессиональном исполнении, как взаимовыгодное сотрудничество для
          достижения общей цели.
        </p>
      </div>
    </SectionLayout>
  );
};

export default ThirdSectionMain;
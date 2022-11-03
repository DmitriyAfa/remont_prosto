import styles from "../components/Stock/stock.module.scss";
import { PageLayout } from "../components/PageLayout/PageLayout";
import svg from "../assets/image/icons/discount.svg";
export function StockPage() {
  return (
    <PageLayout header={"Акции"} to={"/"} toContent="На главную">
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.img}>
            <img alt={"акция"} src={svg} />
          </div>
          <h3 className={styles.subtitle}>
            При заказе комплексного ремонта квартиры или офиса под ключ, вы
            получаете скидку от 5 до 20 % от сметной стоимости работ.
          </h3>
        </div>
      </div>
    </PageLayout>
  );
}

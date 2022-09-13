import styles from "./FooterNavbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { navbarFooterConsts } from "../../assets/constans/constans";
const { navbarConst, navbarConst2, navbarConst3 } = navbarFooterConsts;

const FooterNavbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.chapter1}>
          {navbarConst.map(({ id, title, path }) => (
            <Link key={id} to={path}>
              <a
                className={
                  pathname === path
                    ? `${styles.active} ${styles.hoverable}`
                    : styles.hoverable
                }
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
        <div className={styles.chapter2}>
          {navbarConst2.map(({ id, title, path }) => (
            <Link key={id} to={path}>
              <a
                className={
                  pathname === path
                    ? `${styles.active} ${styles.hoverable}`
                    : styles.hoverable
                }
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
        <div className={styles.chapter3}>
          {navbarConst3.map(({ id, title, path }) => (
            <Link key={id} to={path}>
              <a
                className={
                  pathname === path
                    ? `${styles.active} ${styles.hoverable}`
                    : styles.hoverable
                }
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default FooterNavbar;

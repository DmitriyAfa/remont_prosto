import styles from "./NavbarHeader.module.scss";
import { Link, useLocation } from "react-router-dom";
import { navbarHeaderConsts } from "../../assets/constans/constans";
const { navbarConst } = navbarHeaderConsts;
const NavbarHeader = () => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className={styles.nav}>
        {navbarConst.map(({ id, title, path }) => (
          <Link
            key={id}
            to={path}
            className={
              pathname === path
                ? `${styles.active} ${styles.hoverable}`
                : styles.hoverable
            }
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default NavbarHeader;

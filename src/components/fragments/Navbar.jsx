import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  const { children } = props;

  return (
    <header className={styles.header}>
      <nav className={styles.header__navbar}>
        <h1 className={styles.header__navbar__title}>Notes</h1>
        {children}
      </nav>
    </header>
  );
};

export default Navbar;

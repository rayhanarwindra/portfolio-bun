import styles from "./styles/Navbar.module.scss";
export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <span className={styles.Navbar__logo}>Rayhan Arwindra</span>
      <div className={styles.Navbar__menu}>
        <span>Experience</span>
        <span>Projects</span>
        <span>Contacts</span>
      </div>
    </nav>
  );
}

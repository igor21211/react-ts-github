import styles from "./Header.module.scss";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>Finder</div>
    <ThemeSwitcher />
  </div>
);

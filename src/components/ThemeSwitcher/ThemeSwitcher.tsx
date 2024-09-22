import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";
import styles from "./ThemeSwitcher.module.scss";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeText = isDarkMode ? "Light" : "Dark";
  const ThemeIcon = isDarkMode ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div
      className={styles.themeSwitcher}
      data-testid="ThemeSwitcher"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};

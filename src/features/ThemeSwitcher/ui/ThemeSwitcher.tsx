import { FC } from "react";
import { classNames, useTheme } from "shared/utils";
import cls from "./themeSwitcher.module.scss";
import MoonIcon from "shared/assets/icons/moon.svg";
import SunIcon from "shared/assets/icons/sun.svg";
import { Theme } from "shared/providers/Theme/ThemeContext";
import { Button, ButtonTheme, ButtonType } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(cls["theme-switcher"], {}, [className])}>
      <Button
        buttonTheme={ButtonTheme.Clear}
        buttonType={ButtonType.Stretch}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
};

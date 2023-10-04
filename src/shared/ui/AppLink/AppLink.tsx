import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import cls from './appLink.module.scss';
import { classNames, useTheme } from 'shared/utils';
import { Theme } from 'shared/utils/theme/ThemeContext';

export interface AppLinkProps extends NavLinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { className, children, ...other } = props;
    const { theme } = useTheme();
    const borderColor = theme === Theme.DARK ? '#ec7e4a' : '#1473e6';
    return (
        <NavLink
            className={classNames(cls.link, {}, [className])}
            style={({ isActive }) =>
                isActive ? { fontWeight: 700, borderBottom: `2px solid ${borderColor}` } : {}
            }
            {...other}>
            {children}
        </NavLink>
    );
};

import { FC } from 'react';
import cls from './navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';

export interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
    return (
        <div className={cls.navbar}>
            <AppLink to="/">Главная</AppLink>
            <AppLink to="/about">О нас</AppLink>
        </div>
    );
};

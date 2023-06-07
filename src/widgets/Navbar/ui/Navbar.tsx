import { NavLink } from 'react-router-dom';
import cls from './navbar.module.scss';

export const Navbar = () => {
    return (
        <div className={cls.navbar}>
            <NavLink
                className={cls.link}
                to="/"
                style={({ isActive }) =>
                    isActive ? { fontWeight: 700, borderBottom: '2px solid #EC7E4A' } : {}
                }>
                Главная
            </NavLink>
            <NavLink
                className={cls.link}
                to="/about"
                style={({ isActive }) =>
                    isActive ? { fontWeight: 700, borderBottom: '2px solid #EC7E4A' } : {}
                }>
                О нас
            </NavLink>
        </div>
    );
};

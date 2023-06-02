import { Link } from 'react-router-dom';
import './index.scss';
import { classNames, useTheme } from 'shared/utils';
import { AppRouter } from './router';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to="/">Главная</Link>
            <Link to="/about">Инфа</Link>

            <AppRouter />
        </div>
    );
};

export default App;

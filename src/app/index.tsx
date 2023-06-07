import './index.scss';
import { classNames, useTheme } from 'shared/utils';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Sidebar />
            <div className="main-wrapper">
                <Navbar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;

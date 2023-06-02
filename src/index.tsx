import { render } from 'react-dom';
import App from 'app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/utils';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);

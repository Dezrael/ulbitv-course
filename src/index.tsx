// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";
import App from "app";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "shared/utils";
import "./shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

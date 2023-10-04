import "./index.scss";
import { classNames, useTheme } from "shared/utils";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Sidebar />
        <div className="main-wrapper">
          <Navbar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

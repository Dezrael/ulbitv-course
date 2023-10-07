import "./index.scss";
import { classNames, useTheme } from "shared/utils";
import { AppRouter } from "./AppRouter";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { PageLoader } from "widgets/PageLoader";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader className="main-loader" />}>
        <Sidebar />
        <div className="main-wrapper">
          <Navbar />
          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;

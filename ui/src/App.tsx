import "./App.scss";
import { Suspense } from "react";

import Loader from "./components/Loader";
import { Outlet } from "react-router-dom";
import LoginBanner from "./components/LoginBanner";

const App = () => {
  return (
    <div>
      <LoginBanner />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default App;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";

const Homepage = lazy(() => import("../pages/Homepage"));
const FllPage = lazy(() => import("../pages/fll-page"));
const FtcPage = lazy(() => import("../pages/ftc-page"));
const FrcPage = lazy(() => import("../pages/frc-page"));
const FgcPage = lazy(() => import("../pages/fgc-pages"));

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Homepage />} />
      <Route path="fll" element={<FllPage />} />
      <Route path="ftc" element={<FtcPage />} />
      <Route path="frc" element={<FrcPage />} />
      <Route path="fgc" element={<FgcPage />} />
    </Route>
  )
);

export default Routes;

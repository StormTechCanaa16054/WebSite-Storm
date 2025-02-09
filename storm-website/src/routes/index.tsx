import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";

const Homepage = lazy(() => import("../pages/Homepage"));
const FllPage = lazy(() => import("../pages/FIRST/fll-page"));
const FtcPage = lazy(() => import("../pages/FIRST/ftc-page"));
const FrcPage = lazy(() => import("../pages/FIRST/frc-page"));
const FgcPage = lazy(() => import("../pages/FIRST/fgc-pages"));
const FirstPage = lazy(() => import("../pages/FIRST/first-page"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const ContatoPage = lazy(() => import("../pages/ContatoPage"));
const ResourcePage = lazy(() => import("../pages/ResourcePage"));

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Homepage />} />
      <Route path="fll" element={<FllPage />} />
      <Route path="ftc" element={<FtcPage />} />
      <Route path="frc" element={<FrcPage />} />
      <Route path="fgc" element={<FgcPage />} />
      <Route path="first" element={<FirstPage />} />
      <Route path="competidores" element={<AboutUsPage />} />
      <Route path="contato" element={<ContatoPage />} />
      <Route path="resource" element={<ResourcePage />}/>
      
    </Route>
  )
);

export default Routes;

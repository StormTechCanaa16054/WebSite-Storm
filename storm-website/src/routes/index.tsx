import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";

const Homepage = lazy(() => import("../pages/Home/homepage"));
const FllPage = lazy(() => import("../pages/fll-page"));
const FtcPage = lazy(() => import("../pages/ftc-page"));
const FrcPage = lazy(() => import("../pages/frc-page"));
const FgcPage = lazy(() => import("../pages/fgc-pages"));
const FirstPage = lazy(() => import("../pages/first-page"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const ContatoPage = lazy(() => import("../pages/ContatoPage"));
const MentorShipPage = lazy(() => import("../pages/MentorShipPage"));



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
      <Route path="mentorsh" element={<MentorShipPage/>}/>
      
    </Route>
  )
);

export default Routes;

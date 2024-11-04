import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { register } from "swiper/element/bundle";

register();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

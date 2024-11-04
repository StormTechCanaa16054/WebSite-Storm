import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles/global.css";

import { RouterProvider } from "react-router-dom";
import Routes from "./routes";

function App() {
  return <RouterProvider router={Routes} />;
}
export default App;

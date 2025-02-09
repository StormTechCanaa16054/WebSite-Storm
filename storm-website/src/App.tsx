import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes";
import './styles/global.css';
function App() {

  return <>
  <Navbar />
  <RouterProvider router={Routes} />
  <Footer />
  
  </>;
}
export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portifolios from "./pages/Portifolios";
import Contact from "./pages/Contact";
import VicobaProject from "./pages/VicobaProject";
import MpProject from "./pages/MpProject";
import ArtisanProject from "./pages/ArtisanProject";
import axios from "axios";

axios.defaults.baseURL = "https://mp.samuelnatal.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/portifolios" element={<Portifolios />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/vicoba" element={<VicobaProject />}></Route>
          <Route path="/moviepoint" element={<MpProject />}></Route>
          <Route path="/artisan" element={<ArtisanProject />}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;

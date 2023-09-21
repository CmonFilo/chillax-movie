import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Movies from "./pages/movies/Movies";
import Favorites from "./pages/favorites/Favorites";
import Downloads from "./pages/downloads/Downloads";
import Missing from "./pages/missing/Missing";
import Footer from "./components/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Animes from "./pages/animes/Animes";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Favorites from "./pages/favorites/Favorites";
import Downloads from "./pages/downloads/Downloads";
import Missing from "./pages/missing/Missing";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/animes" element={<Animes />} />
        <Route path="/" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

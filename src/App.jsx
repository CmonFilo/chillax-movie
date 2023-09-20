import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Animes from "./pages/animes/Animes";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Favorites from "./pages/favorites/Favorites";
import Downloads from "./pages/downloads/Downloads";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/animes" element={<Animes />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </Router>
  );
}

export default App;

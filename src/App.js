import { useState, useEffect } from "react";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=fb878faf8421f9424984d2917be6c5eb&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        active={active}
        setActive={setActive}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;

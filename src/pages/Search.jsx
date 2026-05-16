import { MovieCard } from "../components/MovieCard";
import { use, useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_SEARCH = import.meta.env.VITE_SEARCH;

  const getSearchedMovies = async () => {
    setLoading(true);
    const res = await fetch(
      `${API_SEARCH}?query=${query}&${API_KEY}&language=pt-BR`,
    );
    const data = await res.json();
    console.log(data);
    setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getSearchedMovies();
  }, [query]);

  return (
    <div className="bg-slate-800 flex flex-col items-center pt-24 md:pt-16">
        {loading && <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>}
        {movies.length === 0 && !loading && <div className="text-white h-lvh text-center text-2xl font-bold m-3">Nenhum resultado encontrado para "{query}"</div>}
        {movies.length > 0 && <h1 className="text-white text-center text-2xl font-bold m-3">Resultados para "{query}"</h1>}
        <MovieCard Movies={movies} /> 
    </div>
  );
}

export default Search;

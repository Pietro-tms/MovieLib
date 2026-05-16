import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import { MovieCard } from "../components/MovieCard";

const API_KEY = import.meta.env.VITE_API_KEY;
const API = import.meta.env.VITE_API;

function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTopMovies = async () => {
    const res = await fetch(`${API}top_rated?${API_KEY}&language=pt-BR`);
    const data = await res.json();

    console.log(data);
    setTopMovies(data.results);
    setLoading(false);
  };


  useEffect(() => {
    getTopMovies();
  }, []);

  return (
  <div className="bg-slate-800 flex flex-col items-center pt-24 md:pt-16">
    {loading ? ( <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div> ) :
    (
      <>
        <h1 className="text-white text-center text-2xl font-bold m-3">Filmes em Destaque</h1>
        <MovieCard Movies={topMovies} />
      </>
    )}
  </div>
  )
}

export default Home;

import React, { use } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import iconStar from "../assets/icon-star.png";

function Movie() {
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API = import.meta.env.VITE_API;
  const API_IMG = import.meta.env.VITE_IMG;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovieDetails = async () => {
    setLoading(true);
    const res = await fetch(`${API}${id}?${API_KEY}&language=pt-BR`);
    const data = await res.json();

    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  return (
    <div className="bg-slate-800 flex flex-col items-center pt-24 md:pt-16 p-10">
      {loading && 
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      } 
       
      {!loading && movie && (
        <div className="bg-slate-800 flex flex-row items-center">
          <img
            className="p-10 rounded-2xl"
            src={`${API_IMG}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="flex flex-col items-start ml-4 p-10 bg-slate-700 rounded-lg shadow-md">
            <h1 className="text-white text-center text-2xl font-bold">
              {movie.title}
            </h1>
            <h2 className="text-gray-100 text-lg font-semibold">
              {movie.tagline}
            </h2>
            <h3 className="text-gray-100 text-md font-normal">
              {movie.release_date}
            </h3>
            <p className="text-gray-100 mt-1">
              <img
                className="w-5 h-5 inline mr-1 "
                src={iconStar}
                alt="Estrela"
              />
              {movie.vote_average ? movie.vote_average.toFixed(1) : "Sem nota"}
            </p>
            <p className="text-gray-100 mt-2 text-justify">{movie.overview}</p>
              
          </div>
          </div>
      )}
    </div>
  );
}

export default Movie;

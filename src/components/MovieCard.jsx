import React from "react";
import { Link } from "react-router-dom";
import iconStar from "../assets/icon-star.png";

export const MovieCard = ({ Movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-slate-700 rounded-lg shadow-md p-4 flex flex-col justify-between items-start"
        >
          <img
            className="w-full h-120 object-cover rounded-t-lg"
            src={`${import.meta.env.VITE_IMG}${movie.poster_path}`}
            alt={movie.title}
          />
          <h2 className="text-white text-lg font-semibold mt-2">
            {movie.title}
          </h2>
          <p className="text-gray-100 mt-1">
            <img
              className="w-5 h-5 inline mr-1 "
              src={iconStar}
              alt="Estrela"
            />
            {movie.vote_average ? movie.vote_average.toFixed(1) : "Sem nota"}
          </p>
          <Link
            to={`/movie/${movie.id}`}
            className="bg-blue-700 hover:bg-blue-800 w-full text-center text-white py-2 px-4 rounded-lg"
          >
            Ver mais
          </Link>
        </div>
      ))}
    </div>
  );
};

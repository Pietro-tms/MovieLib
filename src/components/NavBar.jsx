import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconSearch from "../assets/icon-search.png";

export const NavBar = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchMovie) return;

    navigate(`/search?q=${searchMovie}`);
    setSearchMovie("");
  };

  return (
    <nav className="bg-slate-950 text-white w-full h-24 p-4 flex flex-col md:flex-row md:h-16 justify-around items-center fixed">
      <Link className="text-xl hover:text-2xl hover:text-blue-700" to="/">
        MovieLib
      </Link>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="bg-slate-50 outline-none text-black p-2 rounded-2xl"
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearchMovie(e.target.value)}
          value={searchMovie}
        />
        <button
          className="bg-blue-700 p-2 rounded-2xl cursor-pointer"
          type="submit"
        >
          <img className="hover:scale-125" src={iconSearch} alt="Lupa" />
        </button>
      </form>
    </nav>
  );
};

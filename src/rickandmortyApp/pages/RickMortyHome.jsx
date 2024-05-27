import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./rickmortyhome.css";
import { CharacterCard } from "../components/charactercard/CharacterCard";
import { NavbarGreen } from "../components/navbargreen/NavbarGreen";
import { CharactersContext } from "../CharactersContext";

export const RickMortyHome = () => {
  const { characters, setCharacters } = useContext(CharactersContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        setCharacters(response.data.results);
        setInfo(response.data.info);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (info.next) {
      setPage(page + 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="p-4 text-center font-style1 wobble-hor-bottom">
        Rick and Morty Characters
      </h1>

      <div className="card-container d-flex flex-row flex-wrap justify-content-center p-3 ">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <div className="pagination d-flex justify-content-center p-2">
        {info.prev && (
          <button
            className="button mx-2"
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            PREVIOUS PAGE
          </button>
        )}
        {info.next && (
          <button
            className="button mx-2"
            onClick={handleNextPage}
            disabled={!info.next}
          >
            NEXT PAGE
          </button>
        )}
      </div>
    </div>
  );
};

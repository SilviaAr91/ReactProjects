import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./rickmortyhome.css";
import { EpisodeCard } from "../components/episodeCard/EpisodeCard";
import { NavbarGreen } from "../components/navbargreen/NavbarGreen";
//import { CharactersContext } from "../CharactersContext";
import { EpisodesContext } from "../EpisodesContext";

export const EpisodesSection = () => {
  const { episodes, setEpisodes } = useContext(EpisodesContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Solicitar datos de episodios
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => {
        setEpisodes(res.data.results);
        console.log("Datos de episodios API", res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="p-4 text-center font-style1 wobble-hor-bottom">
        Rick and Morty Episodes
      </h1>

      <div className="card-container d-flex flex-row flex-wrap justify-content-center p-3 ">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};

import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../charactercard/characterCard.css";
import defaultImage from "/public/images/rickmorty/rickmortyportal.jpg";
export const EpisodeCard = ({ episode }) => {
  const navigate = useNavigate();
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const fetchCharactersData = async () => {
      const characterDataArray = await Promise.all(
        episode.characters.map(async (characterURL) => {
          const response = await axios.get(characterURL);
          return response.data;
        })
      );
      setCharactersData(characterDataArray);
    };

    fetchCharactersData();
  }, [episode]);

  return (
    <div className="card">
      <img src={defaultImage} alt={episode?.name} className="card-img-top" />
      <div className="container">
        <h5 className="title font-style1">{episode?.name}</h5>
        <p className="description font-style2">
          <strong>Date:</strong> {episode?.air_date}
        </p>
        <p className="description">
          <strong>Episode:</strong> {episode?.episode}
        </p>
        <p className="description">
          <strong>Characters:</strong>{" "}
          {charactersData.map((character) => character.name).join(", ")}
        </p>

        <button
          onClick={() => {
            navigate(`/moreinfo/${episode?.id}`);
          }}
          className="button"
        >
          More info{" "}
        </button>
      </div>
    </div>
  );
};

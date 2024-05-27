import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./characterCard.css";

export const CharacterCard = ({ character }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        src={character.image}
        alt={character.name}
        className="card-img-top"
      />
      <div className="container">
        <h5 className="title font-style1">{character.name}</h5>
        <p className="description font-style2">
          <strong>Status:</strong> {character.status}
        </p>
        <p className="description">
          <strong>Species:</strong> {character.species}
        </p>
        <p className="description">
          <strong>Origin:</strong> {character.origin.name}
        </p>
        <p className="description">
          <strong>Location:</strong> {character.location.name}
        </p>
        <button
          onClick={() => {
            navigate(`/moreinfo/${character?.id}`);
          }}
          className="button"
        >
          More info{" "}
        </button>
      </div>
    </div>
  );
};

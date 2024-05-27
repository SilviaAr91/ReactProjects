import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { CharactersContext } from "../CharactersContext";
import { NavbarGreen } from "../components/navbargreen/NavbarGreen";
import { CharacterCard } from "../components/charactercard/CharacterCard";
import "./moreinfo.css";

export const MoreInfo = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const navigate = useNavigate();

  const { characters } = useContext(CharactersContext);
  useEffect(() => {
    if (characters) {
      let arrayProvisional = characters?.filter((e) => e.id === parseInt(id));
      setCharacter(arrayProvisional[0]);
      localStorage.setItem("character", JSON.stringify(arrayProvisional[0]));
    }
  }, [characters, id]);

  return (
    <div className="d-flex justify-content-center">
      <div className="card roll-in-blurred-left">
        <img
          src={character?.image}
          alt={character?.name}
          className="card-img-top"
        />
        <div className="container">
          <h5 className="title font-style1">{character?.name}</h5>
          <p className="description font-style2">
            <strong>Status:</strong> {character?.status}
          </p>
          <p className="description">
            <strong>Species:</strong> {character?.species}
          </p>
          <p className="description">
            <strong>Origin:</strong> {character?.origin.name}
          </p>
          <p className="description">
            <strong>Location:</strong> {character?.location.name}
          </p>
          <button className="button"> More info </button>
        </div>
      </div>
    </div>
  );
};

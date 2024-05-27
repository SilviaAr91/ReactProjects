import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RickMortyHome } from "./pages/RickMortyHome";
import { MoreInfo } from "./pages/MoreInfo";
import { NavbarGreen } from "./components/navbargreen/NavbarGreen";
import { CharactersProvider } from "./CharactersContext";
import { EpisodesProvider } from "./EpisodesContext";
import { EpisodesSection } from "./pages/EpisodesSection";

export const RickMortyApp = () => {
  return (
    <BrowserRouter>
      <NavbarGreen />
      <CharactersProvider>
        <EpisodesProvider>
          <Routes>
            <Route path="/" element={<RickMortyHome />} />
            <Route path="/moreinfo/:id" element={<MoreInfo />} />
            <Route path="/episodes" element={<EpisodesSection />} />
          </Routes>
        </EpisodesProvider>
      </CharactersProvider>
    </BrowserRouter>
  );
};

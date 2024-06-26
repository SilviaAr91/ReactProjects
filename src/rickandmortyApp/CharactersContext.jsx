import React, { createContext, useContext, useState } from 'react';


export const CharactersContext = createContext();


export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};


export const useCharacters = () => {
  return useContext(CharactersContext);
};
import React, { createContext, useContext, useState } from 'react';


export const EpisodesContext = createContext();


export const EpisodesProvider = ({ children }) => {
  const [episodes, setEpisodes] = useState([]);

  return (
    <EpisodesContext.Provider value={{ episodes, setEpisodes }}>
      {children}
    </EpisodesContext.Provider>
  );
};


export const useEpisodes = () => {
  return useContext(EpisodesContext);
};
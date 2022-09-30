import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Mat Kilau",
      price: "RM20",
      id: 2021
    },
    {
      name: "Paskal",
      price: "RM20",
      id: 2022
    },
    {
      name: "Air Force",
      price: "RM20",
      id: 2019
    },
    {
      name: "Abang Long Padil 3",
      price: "RM20",
      id: 2023
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

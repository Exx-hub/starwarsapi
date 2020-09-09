import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPeople = async () => {
      const result = await fetch("https://swapi.dev/api/people/");
      const data = await result.json();

      //   console.log(data.results);
      setPeople(data.results);
      setLoading(false);
    };
    const getPlanets = async () => {
      const result = await fetch("https://swapi.dev/api/planets/");
      const data = await result.json();

      //   console.log(data);
      setPlanets(data.results);
      setLoading(false);
    };
    getPeople();
    getPlanets();
  }, []);

  return (
    <GlobalContext.Provider value={{ people, planets, loading }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;

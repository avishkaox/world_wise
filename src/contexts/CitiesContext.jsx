import { createContext, useEffect, useState } from "react";

const ContextProvider = createContext();

function CitiesContext({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function GetCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        if (!res.ok) throw new Error("something went wrong");
        setCities(data);
        console.log(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    GetCities();
  }, []);
  return (
    <ContextProvider.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export { CitiesContext, ContextProvider };

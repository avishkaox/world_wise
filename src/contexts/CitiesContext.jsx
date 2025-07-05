import { createContext, useEffect, useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [citybyid, setCityById] = useState({});
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

  async function getCityById(id) {
    try {
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      if (!res.ok) throw new Error("Something went wrong");
      console.log(data);
      setCityById(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        citybyid,
        getCityById,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesContext, CitiesProvider };

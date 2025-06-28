import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "./pages/Products";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountriesList from "./components/CountriesList";
import City from "./components/City";

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Products />} />
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList isLoading={isLoading} cities={cities} />}
          />
          <Route
            path="cities"
            element={<CityList isLoading={isLoading} cities={cities} />}
          />
          <Route path="cities/:id" element={<City cities={cities} />} />
          <Route path="countries" element={<CountriesList cities={cities} />} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

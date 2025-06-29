import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { ContextProvider } from "../contexts/CitiesContext";
import { useContext } from "react";

function CountriesList() {
    const {cities , isLoading} = useContext(ContextProvider)
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((array, cur) => {
    if (!array.some((el) => el.country === cur.country)) {
      return [...array, { country: cur.country, emoji: cur.emoji }];
    }
    return array;
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.countriesList}>
          {countries.map((item, index) => (
            <CountryItem key={index} country={item} />
          ))}
        </ul>
      )}
    </>
  );
}
export default CountriesList;

import styles from "./City.module.css";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../contexts/CitiesContext";
import { useContext, useEffect } from "react";
import BackButton from "./BackButton";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { citybyid , getCityById } = useContext(ContextProvider);
  const id = useParams();
  console.log(id.id);
  // const currentCity = cities.filter((item) => item.id == x.id);
  // const { cityName, emoji, date, notes } = currentCity[0];

  useEffect(
    function () {
      getCityById(id.id);
    },
    [id]
  );

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{citybyid.emoji}</span> {citybyid.cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {citybyid.cityName} on</h6>
        <p>{formatDate(citybyid.date || null)}</p>
      </div>

      {citybyid.notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{citybyid.notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${citybyid.cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {citybyid.cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div><BackButton/></div>
    </div>
  );
}

export default City;

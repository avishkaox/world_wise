import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem(props) {
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${props.cities.id}?lat=${props.cities.position.lat}&lng=${props.cities.position.lng}`}
      >
        <span className={styles.emoji}>{props.cities.emoji}</span>
        <h3 className={styles.name}>{props.cities.cityName}</h3>
        <time className={styles.date}>{formatDate(props.cities.date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
export default CityItem;

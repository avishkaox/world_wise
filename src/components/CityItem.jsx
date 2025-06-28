import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem(props) {
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{props.cities.emoji}</span>
      <h3 className={styles.name}>{props.cities.cityName}</h3>
      <time className={styles.date}>{formatDate(props.cities.date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}
export default CityItem;

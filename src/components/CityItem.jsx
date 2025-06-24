import styles from "./CityItem.module.css";

function CityItem(props) {
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{props.cities.emoji}</span>
      <h3 className={styles.name}>{props.cities.cityName}</h3>
    </li>
  );
}
export default CityItem;

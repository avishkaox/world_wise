import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner"

function CityList(props) {
  return (
    <>
      {props.isLoading ? (
        <Spinner/>
      ) : (
        <ul className={styles.cityList}>
          {props.cities.map((item, index) => (
            <CityItem key={index} cities={item} />
          ))}
        </ul>
      )}
    </>
  );
}
export default CityList;

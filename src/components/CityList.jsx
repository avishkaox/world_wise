import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList(props) {
  if (!props.cities.length) return <Message message="Add your first city by clicking on a city on the map" />;

  return (
    <>
      {props.isLoading ? (
        <Spinner />
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

import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { CitiesContext  } from "../contexts/CitiesContext";
import { useContext } from "react";

function CityList() {
  const {cities , isLoading} = useContext(CitiesContext )
  if (!cities.length) return <Message message="Add your first city by clicking on a city on the map" />;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.cityList}>
          {cities.map((item, index) => (
            <CityItem key={index} cities={item} />
          ))}
        </ul>
      )}
    </>
  );
}
export default CityList;

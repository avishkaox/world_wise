// import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { useState } from "react";

function Map() {
  // const [mapPosition, setMapPosition] = useState([40, 30]);
  // const [searchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");
  // const mapPosition = [lat, lng];

  return (
    <div className={styles.mapContainer}>
      {/* <h1>Map</h1>
      <h1>Position:{lat} , {lng}</h1> */}
      {/* <MapContainer
        center={mapPosition}
        zoom={13}
        className={styles.map}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
}
export default Map;

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconSize: [25, 30],
});

function Map() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapContainer
        center={[41.2235788, 74.7461058]}
        zoom={8}
        scrollWheelZoom={false}
        style={{
          width: "90%",
          height: 900,
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[42.861875, 74.586588]} icon={markerIcon}>
          <Popup>
            <h6 style={{ color: "#000" }}>
              1. ОАО «Государственная страховая организация» <br />
              Кол центр: 0(312) 54-54-00, 0(553) 54-54-00, 0(777) 54-54-00,
              0(707) 54-54-00 <br />
              Email: info@gso.kg <br />
              Головной офис: г. Бишкек, пр. Ч. Айтматова 1, строение 2, 4 этаж
            </h6>
          </Popup>
        </Marker>
        <Marker position={[42.832705, 74.584729]} icon={markerIcon}>
          <Popup>
            <h6 style={{ color: "#000" }}>
              2. Чуй-Бишкекский филиал ОАО «ГСО» <br />
              0(312) 54-43-20 0(312) 54-43-22 <br />
              Email: bishkek@gso.kg <br />
              г. Бишкек, пр. Ч. Айтматова 1, строение 2, 4 этаж, каб. 425
            </h6>
          </Popup>
        </Marker>
        <Marker position={[40.516928, 72.804555]} icon={markerIcon}>
          <Popup>
            <h6 style={{ color: "#000" }}>
              3. Ошский филиал ОАО «ГСО» <br />
              0(3222) 5-52-31 <br />
              Email: osh@gso.kg <br />
              г. Ош ул.Ленина 221, каб.26,27
            </h6>
          </Popup>
        </Marker>
        <Marker position={[42.493524, 78.398248]} icon={markerIcon}>
          <Popup>
            <h6 style={{ color: "#000" }}>
              4. Иссык-Кульский филиал ОАО «ГСО» <br />
              0(3922) 5-49-10 <br />
              Email: ik@gso.kg <br />
              г. Каракол ул.Гебзе 124
            </h6>
          </Popup>
        </Marker>
        <Marker position={[42.522376, 72.246944]} icon={markerIcon}>
          <Popup>
            <h6 style={{ color: "#000" }}>
              5. Таласский филиал ОАО «ГСО» <br />
              0(3422) 5-20-60 <br />
              Email: talas@gso.kg <br />
              г. Талас ул. Бердике-Баатыра 295 А
            </h6>
          </Popup>
        </Marker>
        <Marker position={[40.930596, 73.006856]} icon={markerIcon}>
          <Popup>
            <h6 style={{ color: "#000" }}>
              6. Джалал-Абадский филиал ОАО «ГСО» <br />
              0(3722) 2-41-01 0(3722) 2-41-12 <br />
              Email: ja@gso.kg <br />
              г. Джалал-Абад ул. Ж.Бакиева 16г.
            </h6>
          </Popup>
        </Marker>
        <Marker position={[41.428945, 75.997662]} icon={markerIcon}>
          <Popup>
            <h6 style={{ color: "#000" }}>
              7. Нарынский филиал ОАО «ГСО» <br />
              0(3522) 5-71-01 <br />
              Email: naryn@gso.kg <br />
              г. Нарын ул.Ленина 76
            </h6>
          </Popup>
        </Marker>
        <Marker position={[40.05911, 70.820626]} icon={markerIcon}>
          <Popup>
            <h6 style={{ color: "#000" }}>
              8. Баткенский филиал ОАО «ГСО» <br />
              + 996 551 766 262 + 996 777 769 051 <br />
              Email: batken@gso.kg <br />
              г.Баткен ул.Нургазыева 10
            </h6>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;

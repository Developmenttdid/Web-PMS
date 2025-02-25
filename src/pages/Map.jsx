import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import L, { Icon, divIcon} from "leaflet";
import "leaflet/dist/leaflet.css";
import React, {useEffect, useRef, useState} from "react";
import { MapContainer, Marker, Popup, TileLayer ,useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import "esri-leaflet";
import "esri-leaflet-geocoder";
import "leaflet-search";
import "leaflet-search/dist/leaflet-search.src.css";


function Map(){
  const mapRef = useRef(null); // Gunakan useRef untuk menyimpan referensi elemen peta

  useEffect(() => {
    if (!mapRef.current) return;

    // Data lokasi
    const data = [
      { loc: [41.57533, 13.102411], title: "aquamarine" },
      { loc: [41.57573, 13.002411], title: "black" },
      { loc: [41.807149, 13.162994], title: "blue" },
      { loc: [41.507149, 13.172994], title: "chocolate" },
      { loc: [41.847149, 14.132994], title: "coral" },
      { loc: [41.21919, 13.062145], title: "cyan" },
      { loc: [41.34419, 13.242145], title: "darkblue" },
      { loc: [41.67919, 13.122145], title: "Darkred" },
      { loc: [41.32919, 13.192145], title: "Darkgray" },
      { loc: [41.37929, 13.122545], title: "dodgerblue" },
      { loc: [41.40919, 13.362145], title: "gray" },
      { loc: [41.794008, 12.583884], title: "green" },
      { loc: [41.805008, 12.982884], title: "greenyellow" },
      { loc: [41.536175, 13.27359], title: "red" },
      { loc: [41.516175, 13.37359], title: "rosybrown" },
      { loc: [41.506175, 13.27359], title: "royalblue" },
      { loc: [41.836175, 13.67359], title: "salmon" },
      { loc: [41.796175, 13.57059], title: "seagreen" },
      { loc: [41.436175, 13.57359], title: "seashell" },
      { loc: [41.336175, 13.97359], title: "silver" },
      { loc: [41.236175, 13.27359], title: "skyblue" },
      { loc: [41.546175, 13.47359], title: "yellow" },
      { loc: [41.23919, 13.032145], title: "white" }
    ];

    // Inisialisasi peta
    const map = L.map(mapRef.current, {
      center: data[0].loc,
      zoom: 9
    });

    const customIcon = new Icon({
          iconUrl: process.env.PUBLIC_URL + "location.png",
          iconSize: [38, 38],
        });

    // Tambahkan layer tile OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    // Layer untuk marker
    const markersLayer = L.layerGroup().addTo(map);

    // Tambahkan kontrol pencarian
    const controlSearch = new L.Control.Search({
      position: "topright",
      layer: markersLayer,
      initial: false,
      zoom: 12,
      marker: false
    });

    map.addControl(controlSearch);

    // Menambahkan marker ke peta
    data.forEach(({ loc, title }) => {
      const marker = L.marker(loc, {icon: customIcon, title }).bindPopup(`title: ${title}`);
      markersLayer.addLayer(marker);
    });

    return () => {
      map.remove(); // Cleanup saat komponen di-unmount
    };
  }, []);

  return (
    <div className="container-fluid mx-0 my-0 pt-0 px-1 pb-1">
      <div className="row">
        <div className="col-lg-12">
        <div ref={mapRef} style={{ height: "500px" }}></div>
        </div>
      </div>
    </div>
  );
}

// function Map() {
//   const markers = [
//     {
//       geocode: [-6.895842, 107.581272],
//       popUp: "Test1",
//     },
//     {
//       geocode: [-6.895523, 107.582083],
//       popUp: "Test2",
//     },
//     {
//       geocode: [-6.896047, 107.581911],
//       popUp: "Test3",
//     },
//   ];

//   const customIcon = new Icon({
//     iconUrl: process.env.PUBLIC_URL + "location.png",
//     iconSize: [38, 38],
//   });

//   const createCustomClusterIcon = (cluster) => {
//     return new L.divIcon({
//       html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
//       className: "custom-marker-cluster",
//       iconSize: L.point(33, 33, true),
//     })
//   }

//   return (
//     <div>
//       {/* leaflet map */}
//       <MapContainer
//         center={[-6.895512268509544, 107.58147029413793]}
//         zoom={13}
//         style={{ height: "500px", width: "100%" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />



//         <MarkerClusterGroup
//         chunkedLoading
//         iconCreateFunction={createCustomClusterIcon}
//         >
//           {markers.map((marker) => (
//             <Marker position={marker.geocode} icon={customIcon}>
//               <Popup>{marker.popUp}</Popup>
//             </Marker>
//           ))}
//         </MarkerClusterGroup>
      
//       </MapContainer>
//     </div>
//   );
// }

export default Map;


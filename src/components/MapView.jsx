import { MapContainer, Polygon, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Markers } from "./markers"
//import { Poligono } from "./Poligono"
import React, { useEffect, useRef } from "react";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';



export const MapView = () => {
  const polygonCoordinates = [
    [4.4610, -75.5910],
    [4.4520, -75.6750],
    [4.5600, -75.6940],
    [4.5670, -75.6000],
    [4.4880, -75.6000],
  ];

  const clima = '25°C - Mayormente Nublado';
  const extras = 'Restaurantes|Hoteles|Museos';

  return (
    <div className="map-page">
      <div className="left-section">
      <></>
        
        <h1></h1>
        <h1></h1>
        <h1></h1>
        
        <div className="search-bar">
          <input type="text" placeholder="Search" className="text" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        
        <h1></h1>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/54/8c/9e/getlstd-property-photo.jpg?w=1200&h=-1&s=1"className="imagen" alt="Descripción del lugar" />
        <h2>Armenia-Quindío              </h2>
        
        <div className="clima-info">
        <FontAwesomeIcon icon={faSun} className="weather-icon" />
          <h1> {clima}</h1>
        </div>
        <p>Armenia es la capital del departamento de Quindío, en el oeste de Colombia. Está enmarcada por la cordillera de los Andes y su centro es la Plaza de Bolívar, con su moderna catedral triangular de La Inmaculada Concepción. El frondoso Parque de la Vida tiene un lago bordeado de árboles y una pista de patinaje sobre ruedas. </p>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        
      </div>

      

      <div className="map-container">
        <MapContainer id="mapid" center={{ lat: '4.5422715', lng: '-75.6805496' }} zoom={13}>

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markers />
          <Polygon positions={polygonCoordinates} color="red" />
        </MapContainer>
      </div>
    </div>
  )

}



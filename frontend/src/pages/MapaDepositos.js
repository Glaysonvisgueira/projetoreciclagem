import React from 'react';
import {MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import Navbar from "../components/Navbar"

import styles from '../styles/pages/MapaDepositos.module.css'

function MapaDepositos() {


    const positionsMarkers = [
        {
          "deposito": "BAC",
          "latitude": -4.2320751,
          "longitude": -44.7778116
        },
        {
          "deposito": "BDE",
          "latitude": -7.5280551,
          "longitude": -46.0419511
        },
        {
          "deposito": "BDF",
          "latitude": -12.1454787,
          "longitude": -44.9917585
        },
        {
          "deposito": "BOJ",
          "latitude": -9.071187,
          "longitude": -44.3582158
        },
        {
          "deposito": "CAD",
          "latitude": -4.8263691,
          "longitude": -42.1657778
        },
        {
          "deposito": "CDE",
          "latitude": -10.4415572,
          "longitude": -45.1632527
        },
        {
          "deposito": "CDP",
          "latitude": -4.872746,
          "longitude": -43.339702
        },
        {
          "deposito": "CHD",
          "latitude": -3.7406608,
          "longitude": -43.3584992
        },
        {
          "deposito": "DAG",
          "latitude": -7.200595,
          "longitude": -48.2111424
        },
        {
          "deposito": "DBH",
          "latitude": -2.7507475,
          "longitude": -42.8276534
        },
        {
          "deposito": "DPI",
          "latitude": -2.5311598,
          "longitude": -45.0882989
        },
        {
          "deposito": "DPU",
          "latitude": -5.295812,
          "longitude": -44.4987482
        },
        {
          "deposito": "DSI",
          "latitude": -3.6635115,
          "longitude": -45.3851489
        },
        {
          "deposito": "FLD",
          "latitude": -6.7792474,
          "longitude": -43.0393016
        },
        {
          "deposito": "IDC",
          "latitude": -5.4966054,
          "longitude": -47.4767651
        },
        {
          "deposito": "OEI",
          "latitude": -7.0131848,
          "longitude": -42.1332168
        },
        {
          "deposito": "PAR",
          "latitude": -2.901394,
          "longitude": -41.7789786
        },
        {
          "deposito": "PDC",
          "latitude": -9.3769523,
          "longitude": -40.4878639
        },
        {
          "deposito": "PDF",
          "latitude": -4.572938,
          "longitude": -44.6030792
        },
        {
          "deposito": "PID",
          "latitude": -4.2716319,
          "longitude": -41.77778
        },
        {
          "deposito": "DPC",
          "latitude": -7.075276,
          "longitude": -41.471161
        },
        {
          "deposito": "ROS",
          "latitude": -2.9405201,
          "longitude": -44.2478192
        },
        {
          "deposito": "SRD",
          "latitude": -9.011327,
          "longitude": -42.692025
        },
        {
          "deposito": "ZED",
          "latitude": -3.2756286,
          "longitude": -45.6562048
        }
      ]

    return (
        <>
        <Navbar />
        <div className={styles.containerPage}>
            <MapContainer 
            center={[-6.8965231, -42.1914786]}
            zoom={6}
            style={{width: '100%', height: '100%'}}
            scrollWheelZoom={true}
            >
                <TileLayer 
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {positionsMarkers.map(deposito =>
                                <Marker position={[deposito.latitude, deposito.longitude]}>
                                <Popup>                                    
                                    <span>Aqui está o depósito de {deposito.deposito}!</span>
                                </Popup>
                                
                            </Marker>
                                )}

            </MapContainer>
        </div>
    </>
  );
}

export default MapaDepositos;

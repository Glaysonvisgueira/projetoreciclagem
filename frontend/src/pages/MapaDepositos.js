import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import api from '../services/api.js'

import Navbar from "../components/Navbar"
import Loading from "../components/Loading"
import Footer from "../components/Footer"

import styles from '../styles/pages/MapaDepositos.module.css'

function MapaDepositos() {


      const [depositos, setDepositos] = useState([]);
      const [loading, setLoading] = useState(true);
      const [locations, setLocations] = useState([]);
      const [activeButton, setActiveButton] = useState(0)

      useEffect(() => {
        async function loadDepositos(){      
            const response = await api.get('/depositos')
            setDepositos(response.data); 
            setLocations(response.data);
            setLoading(false); 
        };        
        loadDepositos();  

        //console.log(depositos)      
      }, []);

      

      if(loading){
        return (
            <div className={styles.loadingContainer}>
                <Navbar />
                <Loading />
                <Footer />
            </div>
        )
    } 
    
    /* if (!deposito.dados_geograficos) {
      return (
        <>
          <Navbar />
          <Loading />
          <Footer />
        </>
      );
    } */

    async function filtrarDepositos(uf){
        const novosMarkers = await depositos.filter((item) => item.dados_geograficos.uf === uf);
        
        setLocations(novosMarkers);        
    }

    async function filtrarTodosDepositos(){      
        setLocations(depositos);        
    }

    return (
        <>
        
          
        <div className={styles.containerPage}>
          <Navbar />
              <div className={styles.containerPageRow}>
              
               <aside className={styles.asideContainer}>
                    <header>
                      <h2>Depósitos elegidos</h2>
                      <button id="TODOS" className={styles.filterButton} type="button" onClick={() => {filtrarTodosDepositos()}}>
                          TODOS (24)
                      </button>
                      <button id="PI" className={styles.filterButton} type="button" onClick={() => {filtrarDepositos('PI')}}>
                          PÍAUI (9)
                      </button>
                      <button id="MA" className={styles.filterButton} type="button" onClick={() => {filtrarDepositos('MA')}}>
                          MARANHÃO (12)
                      </button>
                      <button id="BA" className={styles.filterButton} type="button" onClick={() => {filtrarDepositos('BA')}}>
                          BAHIA (1)
                      </button>
                      <button id="TO" className={styles.filterButton} type="button" onClick={() => {filtrarDepositos('TO')}}>
                          TOCANTINS (1)
                      </button>
                      <button id="PE" className={styles.filterButton} type="button" onClick={() => {filtrarDepositos('PE')}}>
                          PERNAMBUCO (1)
                      </button>
                    </header>

                    
                  </aside>
                  
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
                                {locations.map(deposito =>
                                      <Marker position={[deposito.dados_geograficos.location.latitude, deposito.dados_geograficos.location.longitude]}>
                                        <Popup>                                    
                                            <span>Aqui está o depósito de {deposito.sigla_dep}!</span>
                                        </Popup>
                                      </Marker>
                                )}

                  </MapContainer>
              </div>
              <Footer />
        </div>
    </>
  );
}

export default MapaDepositos;

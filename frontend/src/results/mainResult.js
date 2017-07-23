import ReactDOM from 'react-dom';
import React from 'react';
import ResultItem from './resultItem';
import MapContainer from './maps/mapContainer';
import Map from './maps/map';
import Navbar from '../components/Navbar';

const Mainresult = (props) => {
  
        // <div className="mainResultDiv" style = {{display: "flex",flexDirection: "column", justifyContent: "center"}}>
          // <div className="gMaps">
          // </div>
    return(
        <div className="mainResultDiv" style = {{display: "flex",flexDirection: "column", justifyContent: "center"}}>  
          {/* <br /> */}
          <Navbar />
          <center>
           <MapContainer />
          </center>
          <ResultItem />
        </div>
    )
  
}

export default Mainresult

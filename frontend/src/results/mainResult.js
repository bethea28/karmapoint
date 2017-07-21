import ReactDOM from 'react-dom';
import React from 'react';
import ResultItem from './resultItem';
import MapContainer from './maps/mapContainer';
import Map from './maps/map';
import Navbar from '../components/Navbar';

const Mainresult = (props) => {
  
    return(
        <div className="mainResultDiv" style = {{display: "flex",flexDirection: "column", justifyContent: "center"}}>
          <Navbar />
          <div className="gMaps">
          </div>
          {/* <br /> */}
          <ResultItem />
        	   <MapContainer />
        	</div>
    )
  
}

export default Mainresult

import ReactDOM from 'react-dom';
import React from 'react';
import ResultItem from './resultItem';
import MapContainer from './maps/mapContainer';
import Map from './maps/map';
import Navbar from '../components/Navbar';

const Mainresult = React.createClass({
  render(){
    return(
        <div className="mainResultDiv" style = {{display: "flex",flexDirection: "column", justifyContent: "center"}}>
          <Navbar />
          <div className="gMaps">
        	   <MapContainer />
          </div>
        	{/* <br /> */}
        	<ResultItem />
        	</div>
    )
  }
})

export default Mainresult

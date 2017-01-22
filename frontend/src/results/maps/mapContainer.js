import React, {Component} from 'react'
import Map from './map';
import APIcall from '../../../../backend/seed/exAPI.js'

// css
// import '../public/css/main.css';

const MapContainer = React.createClass ({
  getInitialState(){
    return ({data:APIcall})
  },
  componentDidMount(){
    this.state.data.programs.map((a)=>this.setState({data:a.offices}))
    console.log(this.state.data.programs.map((a)=>{a.offices}))
  },
  render() {
    const location = {
      lat: 40.7575285,
      lng:-73.9884469
    }
    const markers=[
      {location: 
        {lat: 40.7575285,
        lng:-73.9884469}
      }
    ]
  return(
    <div style={{width: 600, height: 600, background:'red'}}>
      <Map center={ location } markers={markers}/>
    </div>
    )

  }
})

export default MapContainer;

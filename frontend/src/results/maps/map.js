import React, {Component} from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
import {APIcall} from '../../../../backend/seed/exAPI.js'

export default class MapContainer extends Component{
  render() {
    const mapContainer = <div style={{height:'100%', width: '100%'}}></div>

    const arr=[]
    APIcall.programs.map((a)=>{return a.offices.map((b)=>{
      return arr.push(b.location)
      })
    })

    const markers = arr.map((org, i)=>{

      const marker={
        position: {
          lat:org.latitude,
          lng:org.longitude
        }
      }
      return <Marker icon={'http://i.imgur.com/GctT1pO.png'} key={i} {...marker} />

    })
      return (
          <GoogleMapLoader
            containerElement ={ mapContainer }
                  googleMapElement = {
                      <GoogleMap
                defaultZoom={13}
              defaultCenter={this.props.center}
              options={{streetViewControl: false, mapTypeControl: false}}>
              { markers }
            </GoogleMap>
          }
      />
           
 
      )
  }
};
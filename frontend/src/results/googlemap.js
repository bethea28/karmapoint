var React = require('react');
var $ = require('jquery');
import {Link} from 'react-router';
import apis from './APIkey.js'

let googleMap = React.createClass({
  getInitialState: function() {
    return({data: null})
  },
  componentDidMount() {
    $.ajax({
      url: '',
      type: 'GET'
    }).done((data)=>{
    this.setState({data: data})
    })
  },
  handleClick(event) {
    // console.log(event.target.value)
  },
  render: function() {
    if (this.state.data) {
      return(
        <div>
        <Map google={this.props.google} zoom={14}>
 			<Marker onClick={this.onMarkerClick}
          		name={'Current location'} />
 			<InfoWindow onClose={this.onInfoWindowClose}>
      			<div>
        			<h1>{this.state.geotags.name}</h1>
      			</div>
  			</InfoWindow>
		</Map>
        </div>
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }
  }
})

module.exports = googleMap
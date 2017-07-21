import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import $ from 'jquery'
import {Link} from 'react-router'
var Bertha = require('../../../backend/seed/exAPI')



class ResultItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      programs: null,
      numericId: null
      
    }
  }

  componentDidMount(event){

    $.ajax({
      url:'https://data.cityofnewyork.us/resource/cw3p-q2v6.json',
      type: "GET",

    })
    .done((data)=>{
        let final = data
        console.log(final)
        this.setState({programs: final})
    })
  }
  
  render(){
    return(
        <div>
          <div style ={{display: "flex", flexWrap: "wrap", marginBottom: 130}}>
            {this.state.programs ? this.state.programs.map(function(ele, key){
              return <h5 style = {{display:"flex", justifyContent: 'center', alignItems: 'center', width:250,height: 50, backgroundColor: "#196cfc", borderRadius: 5, marginLeft:  10, marginRight: 10, color: 'white'}} key = {key}> <Link style = {{color: 'white', textDecoration: 'none'}} to={ '/program/' + ele}> {ele.facilityname}</Link> </h5>

            }): <h5> Loading </h5>
            }
          </div>
        </div>
    )
  }
}

export default ResultItem

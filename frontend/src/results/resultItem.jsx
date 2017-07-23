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
      url:'https://data.cityofnewyork.us/resource/cw3p-q2v6.json?$limit=10',
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
        <div style = {{position: "relative" }}>
          <div style ={{ backgroundColor: '#FFD700', display: "flex", flexWrap: "wrap", marginBottom: 0, justifyContent: 'center'}}>
            {this.state.programs ? this.state.programs.map(function(ele, key){
              return <h5 key = {key}> <Link style = {{ borderRadius: 10, backgroundColor: 'orange', color: 'white', textDecoration: 'none'}} to={ '/program/' + ele}> {ele.facilityname}</Link> </h5>

            }): <h5> Loading </h5>
            }
          </div>
        </div>
    )
  }
}

export default ResultItem

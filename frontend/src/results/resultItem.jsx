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
      url:'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/10001/programs?api_key=75ea03a922dc66db2560a23cc4eed49e&serviceTag=food+pantry&limit=15',
      type: "GET",

    })
    .done((data)=>{
        let final = data.programs
        this.setState({programs: final})
    })
  }
  
  render(){
    return(
        <div>
          <div style ={{display: "flex", flexWrap: "wrap", marginBottom: 130}}>
            {this.state.programs ? this.state.programs.map(function(a,b){
              return <h5 style = {{display:"flex", justifyContent: 'center', alignItems: 'center', width:250,height: 50, backgroundColor: "#196cfc", borderRadius: 5, marginLeft:  10, marginRight: 10, color: 'white'}} key = {b}> <Link style = {{color: 'white', textDecoration: 'none'}} to={ '/program/' + a.program_numeric_id}> {a.name}</Link> </h5>

            }): <h5> Loading </h5>
            }
          </div>
        </div>
    )
  }
}

export default ResultItem

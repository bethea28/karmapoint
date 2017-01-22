import ReactDOM from 'react-dom';
import React from 'react';
import ResultItem from './resultItem'


const Mainresult = React.createClass({
  render(){
    return(
        <div style = {{display: "flex",justifyContent: "center"}}>
        <ResultItem />
        </div>
    )
  }
})

export default Mainresult
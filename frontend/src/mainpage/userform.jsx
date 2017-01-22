import ReactDOM from 'react-dom';
import React from 'react';


const Userform = React.createClass({
  getInitilState(){
    return {
      name: '',
      zip: null,
      interest: '',
      education: null,
      health: null,
      transit: null,
      housing: null,
      food: null
    }
  },

  handleChange( key, event){
    let data = event.target.value
    this.setState({
      [key]: data
    })
    console.log(this.state)
  },

  handleClick(key, event){
    let final = event.target.value

    this.setState({
      [key]: final
    })

    console.log(this.state)
  },


  render(){
    return(

        <div className="userForm">
          <div>
            <form>
              <div className="insideForm">
                <div className="inputDiv">
                  <h1 className="inputDivH1">Find a volunteer location</h1>
                  <div>
                    <input onChange = {this.handleChange.bind(this, "name")} placeholder="name" type='text' />
                  </div>
                  <div>
                    <input onChange = {this.handleChange.bind(this, "zip")} placeholder="zipcode" type='text' />
                  </div>
                </div>
                <p className="interests">Interest(s)</p>
                <div className="checkBoxes">
                  <div>
                    <label htmlFor="Education">Education</label>
                    <input onClick = {this.handleClick.bind(this,"education")} type="checkbox" value="Education"/>
                  </div>
                  <div>
                    <label htmlFor="Health">Health</label>
                    <input onClick = {this.handleClick.bind(this,"health")} type="checkbox" value="Health"/>
                  </div>

                  <div>
                    <label htmlFor="Transit">Transit</label>
                    <input onClick = {this.handleClick.bind(this,"transit")} type="checkbox" value="Transit"/>
                  </div>
                  {/* <div>
                    <input onClick = {this.handleClick.bind(this,"housing")} type="checkbox" name="vehicle" value="  Housing"/> Housing
                  </div> */}
                  <div>
                    <label htmlFor="Food">Food</label>
                    <input onClick = {this.handleClick.bind(this, "food")} type="checkbox" value="Food"/>
                  </div>
                </div>
                <input className="formButton" type="submit" />
              </div>
            </form>
          </div>

        </div>

    )
  }
})

export default Userform

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
      
        <div style = {{display: 'flex', justifyContent: 'center'}}>
          <div>
            <form>
              <div>
                <div>
                  <input onChange = {this.handleChange.bind(this, "name")}placeholder = "name" type = 'text' />
                </div>

                <div>
                  <input onChange = {this.handleChange.bind(this, "zip")}placeholder = "zip"type = 'text' />
                </div> 

                <div>
                  <input onChange = {this.handleChange.bind(this,"interest")}placeholder = "interest"  type = 'text' />
                </div>

                <div>
                  <input onClick = {this.handleClick.bind(this,"education")} type="checkbox" name="vehicle" value=" Education "/>Education
           
                </div> 

                <div>
                  <input onClick = {this.handleClick.bind(this,"health")} type="checkbox" name="vehicle" value=" Health "/> Health
                </div>
           
                <div>
                  <input onClick = {this.handleClick.bind(this,"transit")} type="checkbox" name="vehicle" value=" Transit "/> Transit
                </div> 

                <div>
                  <input onClick = {this.handleClick.bind(this,"housing")} type="checkbox" name="vehicle" value="  Housing"/> Housing
           
                </div> 

                <div>
                  <input onClick = {this.handleClick.bind(this, "food")} type="checkbox" name="vehicle" value=" Food "/> Food
                </div>
           
                
                <input placeholder = ""type = "submit" />
              </div>
            </form>
          </div>
         
        </div>

    )
  }
})

export default Userform
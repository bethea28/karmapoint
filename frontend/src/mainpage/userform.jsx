import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {Link} from 'react-router'

class Userform extends Component {
  constructor(props){
    super(props)
    this.state ={
      name: '',
      zip: null,
      interest: '',
      education: null,
      health: null,
      transit: null,
      housing: null,
      food: null
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  

  handleChange( key, event){
    let data = event.target.value
    this.setState({
      [key]: data
    })
    console.log(this.state)
  }

  handleClick(event){
    // let final = key
    // console.log(key)

    this.setState({
      [event.target.value]: event.target.value
    })
    console.log(event.target.value)
  }
  render(){
    return(
        <div className="userForm">
          <div>
            <form>
              <div className="insideForm">
                <div className="inputDiv">
                  <h1 className="inputDivH1">Find a volunteer location</h1>
                  {/* <div>
                    <input onChange = {this.handleChange.bind(this, "name")} placeholder="name" type='text' />
                  </div> */}
                  <div>
                    <input onChange = {this.handleChange.bind(this, "zip")} placeholder="zipcode" type='text' />
                  </div>
                </div>
                <p className="interests">Interest(s)</p>
                <div className="checkBoxes">
                  <div>
                    <label htmlFor="Education">Education</label>
                    <input onClick = {(event)=>{this.handleClick(event)}} type="checkbox" value="education"/>
                  </div>
                  <div>
                    <label htmlFor="Health">Health</label>
                    <input onClick = {(event)=>{this.handleClick(event)}} type="checkbox" value="health"/>
                  </div>

                  <div>
                    <label htmlFor="Transit">Transit</label>
                    <input onClick = {(event)=>{this.handleClick(event)}} type="checkbox" value="transit"/>
                  </div>
                  {/* <div>
                    <input onClick = {this.handleClick.bind(this,"housing")} type="checkbox" name="vehicle" value="  Housing"/> Housing
                  </div> */}
                  <div>
                    <label htmlFor="Food">Food</label>
                    <input onClick = {(event)=>{this.handleClick(event)}} type="checkbox" value="food"/>
                  </div>
                </div>
               <Link to = '/result' ><input className="formButton" type="submit"/></Link>
              </div>

            </form>
          </div>
        </div>

    )
  }
}

export default Userform


// import ReactDOM from 'react-dom';
// import React from 'react';
// import {Link} from 'react-router'

// const Userform = React.createClass({
//   getInitilState(){
//     return {
//       name: '',
//       zip: null,
//       interest: '',
//       education: null,
//       health: null,
//       transit: null,
//       housing: null,
//       food: null
//     }
//   },

//   handleChange( key, event){
//     let data = event.target.value
//     this.setState({
//       [key]: data
//     })
//     console.log(this.state)
//   },

//   handleClick(key, event){
//     let final = event.target.value

//     this.setState({
//       [key]: final
//     })
//     console.log(this.state)
//   },
//   render(){
//     return(
//         <div className="userForm">
//           <div>
//             <form>
//               <div className="insideForm">
//                 <div className="inputDiv">
//                   <h1 className="inputDivH1">Find a volunteer location</h1>
//                   {/* <div>
//                     <input onChange = {this.handleChange.bind(this, "name")} placeholder="name" type='text' />
//                   </div> */}
//                   <div>
//                     <input onChange = {this.handleChange.bind(this, "zip")} placeholder="zipcode" type='text' />
//                   </div>
//                 </div>
//                 <p className="interests">Interest(s)</p>
//                 <div className="checkBoxes">
//                   <div>
//                     <label htmlFor="Education">Education</label>
//                     <input onClick = {this.handleClick.bind(this,"education")} type="checkbox" value="Education"/>
//                   </div>
//                   <div>
//                     <label htmlFor="Health">Health</label>
//                     <input onClick = {this.handleClick.bind(this,"health")} type="checkbox" value="Health"/>
//                   </div>

//                   <div>
//                     <label htmlFor="Transit">Transit</label>
//                     <input onClick = {this.handleClick.bind(this,"transit")} type="checkbox" value="Transit"/>
//                   </div>
//                   {/* <div>
//                     <input onClick = {this.handleClick.bind(this,"housing")} type="checkbox" name="vehicle" value="  Housing"/> Housing
//                   </div> */}
//                   <div>
//                     <label htmlFor="Food">Food</label>
//                     <input onClick = {this.handleClick.bind(this, "food")} type="checkbox" value="Food"/>
//                   </div>
//                 </div>
//                <Link to = '/result' ><input className="formButton" type="submit"/></Link>
//               </div>

//             </form>
//           </div>
//         </div>

//     )
//   }
// })

// export default Userform
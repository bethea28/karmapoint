import React, {Component} from 'react'
import {Link} from 'react-router'
// const APIkey = require('../../../APIkey');
const singleProgram = require('../../../backend/seed/exAPI.js');
import $ from 'jquery';
import Navbar from '../components/Navbar';

class ProgramInfo extends Component {
	constructor(props){
		super(props)
		this.state = {
			programInfo:''
			
		}

		this.showDiv = this.showDiv.bind(this)
		this.alert = this.alert.bind(this)
	}
	
	componentDidMount(){
		//can do search with program_numeric_id as params
		let zipcode = 10001;
		let programId = this.props.params.programId;
		$.ajax({
		url: 'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/'+zipcode+'/programs/'+programId+'?api_key='+ " b0f6c6a6a8be355fc04be76ab3f0c5e6",
		type: 'GET'
		})
		.done((info)=>{
			this.setState({programInfo:info})
		})
	}

	showDiv(){
			$('.messagepage').css({
				'display':'initial',
				'transition':'3s',
			})
			$('.programInfoDiv').css({
				'margin-bottom': '160px'
			})
	}

	alert(){
		alert('Message Sent!')
	}

	render(){
		console.log('render',this.state.programInfo)
			if(this.state.programInfo){
				let info = this.state.programInfo;
				return(
					<div className='programDiv'>
					<Navbar />
					<div className="programInfoDiv">
						<div className='programInnerDiv'>
							<h2>{info.name}</h2>
							<h3>by {info.provider_name}</h3>
							<div className='programdescription'>
								<p>{info.description}</p>
							</div>
							<p><strong>Services this program provides:</strong></p>
							{info.service_tags.join(', ')}
							<br/><br/>
							<div className='programVolunteerBtnDiv'>
							<input type='submit' className='programVolunteerBtn' onClick={this.showDiv} value='Apply to volunteer'/>
							</div>
						</div>
						<br/>

						<div className='messagepage'>
							<h3>Send a message to the program:</h3>
							<br/>
							<textarea placeholder='Let them know why you want to volunteer for this program' />
							<br/>
							<div className='messageSendBtnDiv'>
							<input type='submit' className='messageSendBtn' onClick={this.alert} value='Send'/>
							</div>
						</div>
					</div>
					</div>
				)
			}else{
				return(
					<p>loading...</p>
				)
			}
	}
}

export default ProgramInfo




// const React = require('react');
// import {Link} from 'react-router'
// // const APIkey = require('../../../APIkey');
// const singleProgram = require('../../../backend/seed/exAPI.js');
// import $ from 'jquery';
// import Navbar from '../components/Navbar';

// const ProgramInfo = React.createClass({
// 	getInitialState(){
// 		return({
// 			programInfo:''
// 		})
// 	},
// 	componentDidMount(){
// 		//can do search with program_numeric_id as params
// 		let zipcode = 10001;
// 		let programId = this.props.params.programId;
// 		$.ajax({
// 		url: 'https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/'+zipcode+'/programs/'+programId+'?api_key='+ " b0f6c6a6a8be355fc04be76ab3f0c5e6",
// 		type: 'GET'
// 		})
// 		.done((info)=>{
// 			this.setState({programInfo:info})
// 		})
// 	},
// 	showDiv(){
// 			$('.messagepage').css({
// 				'display':'initial',
// 				'transition':'3s',
// 			})
// 			$('.programInfoDiv').css({
// 				'margin-bottom': '160px'
// 			})
// 	},
// 	alert(){
// 		alert('Message Sent!')
// 	},
// 	render(){
// 		console.log('render',this.state.programInfo)
// 			if(this.state.programInfo){
// 				let info = this.state.programInfo;
// 				return(
// 					<div className='programDiv'>
// 					<Navbar />
// 					<div className="programInfoDiv">
// 						<div className='programInnerDiv'>
// 							<h2>{info.name}</h2>
// 							<h3>by {info.provider_name}</h3>
// 							<div className='programdescription'>
// 								<p>{info.description}</p>
// 							</div>
// 							<p><strong>Services this program provides:</strong></p>
// 							{info.service_tags.join(', ')}
// 							<br/><br/>
// 							<div className='programVolunteerBtnDiv'>
// 							<input type='submit' className='programVolunteerBtn' onClick={this.showDiv} value='Apply to volunteer'/>
// 							</div>
// 						</div>
// 						<br/>

// 						<div className='messagepage'>
// 							<h3>Send a message to the program:</h3>
// 							<br/>
// 							<textarea placeholder='Let them know why you want to volunteer for this program' />
// 							<br/>
// 							<div className='messageSendBtnDiv'>
// 							<input type='submit' className='messageSendBtn' onClick={this.alert} value='Send'/>
// 							</div>
// 						</div>
// 					</div>
// 					</div>
// 				)
// 			}else{
// 				return(
// 					<p>loading...</p>
// 				)
// 			}
// 	}
// })

// export default ProgramInfo

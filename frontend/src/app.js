// import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import Mainpage from './mainpage/mainpage'
import Userform from './mainpage/userform'


const App = React.createClass({
	render(){
		return(
			
      <div>
      <Mainpage />
        <div style = {{height: 50}}>
        </div>
      <Userform />
      </div>
		)
	}
})

ReactDOM.render(
	<App />,
  document.getElementById('root')
)

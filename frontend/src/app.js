// import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// Components
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
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			{/* <IndexRoute /> */}
			<Route path="/result" component={ResultPage} />
		</Route>
	</Router>,
  document.getElementById('root')
)

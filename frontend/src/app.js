// import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, browserHistory, Link,IndexRoute} from 'react-router';
// import ResultItem from './results/res7'
// Components
import Mainpage from './mainpage/mainpage';

import MainResult from './results/resultItem';

import ProgramInfo from './message/programinfo';

import Userform from './mainpage/userform';
import UserAccountPage from './components/userAccount/UserAccountPage';
import Footer from './components/Footer';

// css
import '../public/css/main.css';
import '../public/css/programinfo.css'

const App = React.createClass({
	render(){
		return(
      <div className="mainPage">
			{this.props.children}
			<Footer />
      </div>
		)
	}
});

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Mainpage}/>


			

			{/* <Route path="/result" component={ResultPage} /> */}

			{/*<Route path="/result" component={App} />*/}
			{/*change path of companyinfo to :programId */}
			<Route path='/program/:programId' component={ProgramInfo} />

			<Route path="/account" component={UserAccountPage} />
		</Route>
			<Route path="/result" component={MainResult} /> 
	</Router>,
  document.getElementById('root')
)

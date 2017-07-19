// import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, browserHistory, Link,IndexRoute} from 'react-router';

// Components
import Mainpage from './mainpage/mainpage';
import MainResult from './results/mainResult';
import ProgramInfo from './message/programinfo';
import UserAccountPage from './components/userAccount/UserAccountPage';
import Footer from './components/Footer';
import UserPage from './components/userProfile/UserPage';

// css
import '../public/css/main.css';
import '../public/css/programinfo.css'

const App = (props) => {

		return(
	      <div className="mainPage">
				{this.props.children}
				<Footer />
				</div>
		)
	
};

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Mainpage}/>
			<Route path="/result" component={MainResult} />
			<Route path='/program/:programId' component={ProgramInfo} />
			<Route path="/account" component={UserAccountPage} />
			<Route path="/profile" component={UserPage} />
		</Route>
	</Router>,
  document.getElementById('root')
)
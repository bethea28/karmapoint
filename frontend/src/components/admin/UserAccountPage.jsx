import React,{Component} from 'react';

// components
import PendingDiv from './PendingDiv';
import CompleteVolunteersDiv from './CompleteVolunteersDiv';
import Navbar from '../Navbar';


class UserAccountPage extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <Navbar />
        <div className="userAccountCont">
          <PendingDiv />
          <CompleteVolunteersDiv />
        </div>
      </div>
    )
  }
}


export default UserAccountPage;

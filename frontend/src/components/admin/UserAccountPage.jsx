import React from 'react';

// components
import PendingDiv from './PendingDiv';
import CompleteVolunteersDiv from './CompleteVolunteersDiv';
import Navbar from '../Navbar';


const UserAccountPage = React.createClass({
  render: function(){
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
})


export default UserAccountPage;

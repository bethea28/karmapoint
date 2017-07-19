import React from 'react';

// components
import PendingDiv from './PendingDiv';
import CompleteVolunteersDiv from './CompleteVolunteersDiv';
import Navbar from '../Navbar';
import UpcomingOpps from './UpcomingOpportunities';

const UserAccountPage = (props) => {
  
    return (
      <div>
        <Navbar />
        <div className="userAccountCont">
          <h1>Upcoming opportunities</h1>
          <UpcomingOpps />
          <h1>Pending requests</h1>
          <PendingDiv />
          <h1>Completed tasks</h1>
          <CompleteVolunteersDiv />
        </div>
      </div>
    )

}


export default UserAccountPage;

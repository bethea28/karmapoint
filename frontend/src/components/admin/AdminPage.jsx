import React from 'react';

// components
import PendingDiv from './PendingDiv';
import CompleteVolunteersDiv from './CompleteVolunteersDiv';


const AdminPage = React.createClass({
  render: function(){
    return (
      <div>
        <PendingDiv />
        <CompleteVolunteersDiv />
      </div>
    )
  }
})


export default AdminPage;

import React from 'react';

// components
import AcceptedDiv from "./AcceptedDiv";
import CompletedDiv from "./CompletedDiv";

const UserPage = React.createClass({
  render: function() {
    return (
      <AcceptedDiv />
      <CompletedDiv />
    )
  }
})

export default Userpage;

import React from 'react';

// components
import IndividualPending from './IndividualPending';

const PendingDiv = React.createClass({
  render: function() {
    return (
      <div className="pendingCont">
        <IndividualPending />
      </div>
    )
  }
})

export default PendingDiv;

import React from 'react';

// component
import UserForm from './userform';

const LandingArea = React.createClass({
  render() {
    return (
      <div className="landingArea" >
        {/* <video poster="" autoplay="true" loop>
          <source src="" type="video/mp4">
          </source>
        </video> */}
        <div>
          <h1><span>Karma</span>Point</h1>
          <p>Build a future.</p>
        </div>
        <div className="landingForm">
          <UserForm />
        </div>
      </div>
    )
  }
})

export default LandingArea;

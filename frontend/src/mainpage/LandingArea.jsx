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
          <h1><img src="http://i.imgur.com/MJ3qUKy.png" style={{width:80, height:"auto"}}/><span>Karma</span>Point</h1>
          <p>Keep your past, Build your future.</p>
          <div className="H3Div">
            <h3 className="landingH3">Find oppurtunities to volunteer</h3>
            <h3 className="landingH3">Keep a record and earn points as you go</h3>
            <h3 className="landingH3">Share your public profile with potential oppurtunities</h3>
          </div>
        </div>
        <div className="landingForm">
          <UserForm />
        </div>
      </div>
    )
  }
})

export default LandingArea;

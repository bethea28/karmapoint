import React from 'react';

// components
import AcceptedDiv from "./AcceptedDiv";
import CompleteVolunteersDiv from '../userAccount/CompleteVolunteersDiv';
import Navbar from '../Navbar';

const UserPage = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        <div className="bioProfile">
          <div className="image">
            <img src={"https://secure.gravatar.com/avatar/96bd6bf064aa0929fe44bd2947473069?s=300&d=blank&r=g"}></img>
          </div>
          <div className="bio">
            <p>Hello, my name is Kathy. I enjoy helping others. I look forward to lending a hand.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
        </div>
        <div className="userCompleted">
          <CompleteVolunteersDiv />
        </div>
        <p>view more</p>
      </div>
    )
  }
})

export default UserPage;

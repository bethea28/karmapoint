import React, {Component} from 'react';

// components
import IndividualComplete from './IndividualComplete';

const CompleteVolunteersDiv = (props) => {
  
  return (
      <div className="upcomingCont">
        <div className="individualOpps">
          <div className="servTitle">
            <h3>The Cecil</h3>
            <p>by Housing Services Inc</p>
          </div>
          <p className="oppPara">Kathy is an exceptional worker, who strives to be the very best that no one ever was.</p>
          <div className="services">
            <strong><p>Services this program provides:</p></strong>
            <p>long-term housing, medical care, navigating the system, one-on-one support</p>
          </div>
          <div className="earnedStars">
            <i className="fa fa-star" aria-hidden="true"></i>
            <p>12</p>
          </div>
        </div>
        <div className="individualOpps">
          <div className="servTitle">
            <h3>Basic Needs Program</h3>
            <p>by AIDS Service Center NYC</p>
          </div>
          <p className="oppPara">Kathy is exceptionally helpful and dedicated to our cause</p>
          <div className="services">
            <strong><p>Services this program provides:</p></strong>
            <p>food pantry, free meals, clothing</p>
          </div>
          <div className="earnedStars">
            <i className="fa fa-star" aria-hidden="true"></i>
            <p>20</p>
          </div>
        </div>
        <div className="individualOpps">
          <div className="servTitle">
            <h3>Food Program</h3>
            <p>by Salvation Army New York Temple</p>
          </div>
          <p className="oppPara">Kathy is a hard worker and is dedicated to our cause.</p>
          <div className="services">
            <strong><p>Services this program provides:</p></strong>
            <p>food pantry, free meals</p>
          </div>
          <div className="earnedStars">
            <i className="fa fa-star" aria-hidden="true"></i>
            <p>3</p>
          </div>
        </div>
      </div>
  )

}


export default CompleteVolunteersDiv;



// import React from 'react';

// // components
// import IndividualComplete from './IndividualComplete';

// const CompleteVolunteersDiv = React.createClass({
//   render: function() {
//     return (
//         <div className="upcomingCont">
//           <div className="individualOpps">
//             <div className="servTitle">
//               <h3>The Cecil</h3>
//               <p>by Housing Services Inc</p>
//             </div>
//             <p className="oppPara">Kathy is an exceptional worker, who strives to be the very best that no one ever was.</p>
//             <div className="services">
//               <strong><p>Services this program provides:</p></strong>
//               <p>long-term housing, medical care, navigating the system, one-on-one support</p>
//             </div>
//             <div className="earnedStars">
//               <i className="fa fa-star" aria-hidden="true"></i>
//               <p>12</p>
//             </div>
//           </div>
//           <div className="individualOpps">
//             <div className="servTitle">
//               <h3>Basic Needs Program</h3>
//               <p>by AIDS Service Center NYC</p>
//             </div>
//             <p className="oppPara">Kathy is exceptionally helpful and dedicated to our cause</p>
//             <div className="services">
//               <strong><p>Services this program provides:</p></strong>
//               <p>food pantry, free meals, clothing</p>
//             </div>
//             <div className="earnedStars">
//               <i className="fa fa-star" aria-hidden="true"></i>
//               <p>20</p>
//             </div>
//           </div>
//           <div className="individualOpps">
//             <div className="servTitle">
//               <h3>Food Program</h3>
//               <p>by Salvation Army New York Temple</p>
//             </div>
//             <p className="oppPara">Kathy is a hard worker and is dedicated to our cause.</p>
//             <div className="services">
//               <strong><p>Services this program provides:</p></strong>
//               <p>food pantry, free meals</p>
//             </div>
//             <div className="earnedStars">
//               <i className="fa fa-star" aria-hidden="true"></i>
//               <p>3</p>
//             </div>
//           </div>
//         </div>
//     )
//   }
// })

// export default CompleteVolunteersDiv;

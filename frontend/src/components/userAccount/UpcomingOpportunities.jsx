import React from 'react';

// components
// import IndividualPending from './IndividualPending';

const UpcomingOpps = (props) => {
 
    return (
      <div className="upcomingCont">
        <div className="individualOpps">
          <div className="servTitle">
            <h3>Basic Needs Program</h3>
            <p>by Aids Service Center Of New York City Inc</p>
          </div>
          <p className="oppPara">Basic Needs Program provides free meals, groceries, emergency assistance and clothing bank to families in need. These programs help stabilize clients so that they may maximize their use of ASCNYCs broad range of services. Our top priority is ensuring that our clients have adequate food, shelter and clothing.</p>
          <div className="services">
            <strong><p>Services this program provides:</p></strong>
            <p>food pantry, free meals, clothing, temporary shelter</p>
          </div>
          <div>
            <button>Contact</button>
          </div>
        </div>
        <div className="individualOpps">
          <div className="servTitle">
            <h3>Food Pantry</h3>
            <p>by St. Clements Food Pantry</p>
          </div>
          <p className="oppPara">Food Pantry provides groceries to families in need. Two parishioners started the program based on the growing number of people who looked to the church for assistance to supplement their basic food needs. The Food Pantry is currently open every Friday (except the first Friday of the month) from 4pm to 6pm and every Saturday (except the first Saturday of the month) from 9am to 11:30am.</p>
          <div className="services">
            <strong><p>Services this program provides:</p></strong>
            <p>food pantry</p>
          </div>
          <div>
            <button>Contact</button>
          </div>
        </div>
        <div className="individualOpps">
          <div className="servTitle">
            <h3>Food Program</h3>
            <p>by Salvation Army New York Temple</p>
          </div>
          <p className="oppPara">This program offers free meals and groceries to families in need. The Pantry is open from Monday to Friday from 9:30 -11:00 am and from 1:30 pm -3:00 pm, while the Kitchen is from Monday to Thursday 12 pm-1 pm.</p>
          <div className="services">
            <strong><p>Services this program provides:</p></strong>
            <p>food pantry, free meals</p>
          </div>
          <div>
            <button>Contact</button>
          </div>
        </div>
      </div>
    )

}

export default UpcomingOpps;

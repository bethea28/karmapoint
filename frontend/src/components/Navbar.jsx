import React from 'react';
import {Link} from 'react-router';

const Navbar = (props) => {
  
  return (
    <nav>
      <Link to="/"><p className="brand">Karmapoint</p></Link>
      <ul>
        <Link to="/account"><li>account</li></Link>
        <Link to="/profile"><li>profile</li></Link>
        <div className="karmaPoint">
          <i className="fa fa-star" aria-hidden="true"></i>
          <p>256</p>
        </div>
      </ul>
    </nav>
  )

}

export default Navbar;

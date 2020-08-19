import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='header'>
           <h3>SHELFIE</h3> 
        </div>
      </div>
    );
  }
}

export default Header;

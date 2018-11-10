import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return (
      <footer>
          <button className="backToTop"></button>
          <p className="copyrights"></p>
          <a className="companyLink"></a>
          <span>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
          </span>
      </footer>
    );
  }
}

export default Footer;
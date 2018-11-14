import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return (
      <footer>
          <button className="backToTop">Back to top</button>
          <p className="copyrights">&copy; 2018 YouView</p>
          <a className="companyLink">About Company</a>
          <span>
              <span><i className="fab fa-facebook-f"></i>#4267b2</span>
              <span><i className="fab fa-twitter"></i>#1da1f2</span>
              <span><i className="fab fa-linkedin-in"></i>#0077B5</span>
              <span><i className="fab fa-google-plus-g"></i>#db4437</span>
          </span>
      </footer>
    );
  }
}

export default Footer;
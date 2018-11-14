import React, { Component } from 'react';
import Launch from '../containers/Launch';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      token: ''
    }
  }

  render(){
    
    if(this.state.token){
      return 1;
    }
    return <Launch />;

  }
}

export default App;

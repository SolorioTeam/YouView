import React, { Component } from 'react';

class EmailInput extends Component{
    constructor(props){
        super(props);
        this.state = { email: ''}
    }

    changeInput(e){
        this.setState({email: e.target.value});
    }

    render(){
        return(
            <div>
                <label htmlFor="Email"> Email </label>
                <input 
                    type="email" 
                    id="Email" 
                    value={this.state.email}
                    onChange={(e) => this.changeInput(e)}
                />
            </div>
        )
    }
}

export default EmailInput;
import React, { Component } from 'react';

const emailRegex = /\S+@\S+\.[a-zA-Z]/;

class EmailInput extends Component{
    constructor(props){
        super(props);
        this.state = { 
            email: '',
            validEmail: null
        }
    }

    changeInput(e){
        this.setState({email: e.target.value},
        () => {
            if(this.state.email.match(emailRegex) )
            this.setState(
                {validEmail: true},
                () => console.log(this.state.validEmail)
                // () => this.props.emailValue(this.state.email) 
                );
            else 
            this.setState(
                {validEmail: false},
                () => console.log(this.state.validEmail)

                // () => this.props.emailValue("") 
                );
        }    
        );
    }

    // validEmailHandler = () => {

    //     if(this.state.email.match(emailRegex) )
    //         this.setState(
    //             {validEmail: true},
    //             // () => this.props.emailValue(this.state.email) 
    //             );
    //     else 
    //         this.setState(
    //             {validEmail: false},
    //             // () => this.props.emailValue("") 
    //             );
    // }

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
import React, {Component} from 'react';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            membershipNumber: '',
            password: ''
        }
    }

    handleMemNumInput = (event) => {
        this.setState({
            membershipNumber: event.target.value
        });
    }

    handlePasswordInput = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    render() {
        return(
            <div>
                <div>
                    <p>Membership Number</p>
                    <input type="text" onChange={(event) => this.handleMemNumInput(event)} value={this.state.membershipNumber} />
                    <p>Password</p>
                    <input type="password" onChange={(event) => this.handlePasswordInput(event)} value={this.state.password} />
                </div>
                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}

export default Auth;
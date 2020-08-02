import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getMember} from '../../redux/reducer';
import './Auth.css';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            membership_number: '',
            password: '',
            email: '',
            registerView: false
        }
    }


    handleEmailInput = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleMemNumInput = (event) => {
        this.setState({
            membership_number: event.target.value
        });
    }

    handlePasswordInput = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleRegister = () => {
        const {membership_number, email, password} = this.state;
        axios.post('/auth/register', {membership_number, email, password})
        .then((res) => {
            this.props.getMember(res.data);
            this.props.history.push('/home');
        })
        .catch(err => console.log(err));
    }

    handleLogin = () => {
        const {membership_number, password} = this.state;
        axios.post('/auth/login', {membership_number, password})
        .then((res) => {
            console.log(res.data)
            this.props.getMember(res.data);
            this.props.history.push('/home');
        })
        .catch(err => console.log(err));
    }

    handleToggle = () => {
        this.setState({registerView: !this.state.registerView});
    }


    render() {
        return(
            <div className="auth-background">
                <section className="auth-box">
                    {!this.state.registerView
                    ?  (<>
                        <h3 id="text">Login To Your Membership Page!</h3>
                        <input type="text" placeholder="Membership Number" onChange={(event) => this.handleMemNumInput(event)} value={this.state.membershipNumber} />
                        <input type="password" placeholder="Password" onChange={(event) => this.handlePasswordInput(event)} value={this.state.password} />
                        </>)
                    : <h3 id="textR">Register:</h3>}
                    
                {this.state.registerView
                ? (<>
                    <input placeholder="Email" type="text" onChange={(event) => this.handleEmailInput(event)} value={this.state.email} />
                    <input type="text" placeholder="Membership Number" onChange={(event) => this.handleMemNumInput(event)} value={this.state.membershipNumber} />
                    <input type="password" placeholder="Password" onChange={(event) => this.handlePasswordInput(event)} value={this.state.password} />
                    <button onClick={this.handleRegister}>Register</button>
                    <p id="text2">Already Registered? <button onClick={this.handleToggle}>Login Here</button></p>
                    </>)
                : (<>
                    <button onClick={this.handleLogin}>Login</button>
                    <p id="text2">Not Registered? <button onClick={this.handleToggle}>Register Here</button></p>
                    </>)}
                </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getMember})(Auth);
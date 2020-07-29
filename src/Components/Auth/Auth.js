import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getMember} from '../../redux/reducer';
import {Link} from 'react-router-dom';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            membershipNumber: '',
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
            membershipNumber: event.target.value
        });
    }

    handlePasswordInput = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleRegister = () => {
        const {membershipNumber, email, password} = this.state;
        axios.post('/auth/register', {membershipNumber, email, password})
        .then(res => {
            this.props.getMember(res.data);
        })
        .catch(err => console.log(err));
    }

    handleLogin = () => {
        const {membershipNumber, password} = this.state;
        axios.post('/auth/login', {membershipNumber, password})
        .then(res => {
            this.props.getMember(res.data);
        })
        .catch(err => console.log(err));
    }

    handleToggle = () => {
        this.setState({registerView: !this.state.registerView});
    }


    render() {
        return(
            <div>
                <section>
                    {!this.state.registerView
                    ?  (<>
                        <h3>Login To Your Membership Page!</h3>
                        <input type="text" placeholder="Membership Number" onChange={(event) => this.handleMemNumInput(event)} value={this.state.membershipNumber} />
                        <input type="password" placeholder="Password" onChange={(event) => this.handlePasswordInput(event)} value={this.state.password} />
                        </>)
                    : <h4>Register Here</h4>}
                    
                {this.state.registerView
                ? (<>
                    <input placeholder="Email" type="text" onChange={(event) => this.handleEmailInput(event)} value={this.state.email} />
                    <input type="text" placeholder="Membership Number" onChange={(event) => this.handleMemNumInput(event)} value={this.state.membershipNumber} />
                    <input type="password" placeholder="Password" onChange={(event) => this.handlePasswordInput(event)} value={this.state.password} />
                    <Link to="/home"><button onClick={this.handleRegister}>Register</button></Link>
                    <p>Already Registered? <button onClick={this.handleToggle}>Login Here</button></p>
                    </>)
                : (<>
                    <Link to="/home"><button onClick={this.handleLogin}>Login</button></Link>
                    <p>Not Registered? <button onClick={this.handleToggle}>Register Here</button></p>
                    </>)}
                </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getMember})(Auth);
import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getMember} from '../../redux/reducer';

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

    componentDidMount() {
        if(this.props.member.email) {
            this.props.history.push('/home');
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

    handleRegister = () => {
        const {membershipNumber, email, password} = this.state;
        axios.post('/auth/register', {membershipNumber, email, password})
        .then(res => {
            this.props.getMember(res.data);
            this.props.history.push('/home');
        })
        .catch(err => console.log(err));
    }

    handleLogin = () => {
        const {membershipNumber, password} = this.state;
        axios.post('/auth/login', {membershipNumber, password})
        .then(res => {
            this.props.getMember(res.data);
            this.props.history.push('/home');
        })
        .catch(err => console.log(err));
    }


    render() {
        return(
            <div>
                <section>
                    <p>Membership Number</p>
                    <input type="text" onChange={(event) => this.handleMemNumInput(event)} value={this.state.membershipNumber} />
                    <p>Password</p>
                    <input type="password" onChange={(event) => this.handlePasswordInput(event)} value={this.state.password} />
                </section>
                <div>
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.handleRegister}>Register</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getMember})(Auth);
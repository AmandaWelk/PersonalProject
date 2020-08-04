import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearUser} from '../../redux/reducer';
import axios from 'axios';
import './Header.css';

class Header extends Component {

    handleLogout = () => {
        axios.get('/auth/logout')
        .then(() => {
            this.props.clearUser();
            //this.props.history.push('/');
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="header">
                <nav className="navs">
                    <Link to='/home'><span>Home</span></Link>
                    <Link to='/booking'><span>Book a Tee-Time</span></Link>
                    <Link to='/scores'><span>Enter Your Scores</span></Link>
                    <Link to='/info'><span>Course Information</span></Link>
                    <Link to='/renew'><span>Renew Membership</span></Link>
                    <button onClick={this.handleLogout}>Logout</button>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {clearUser})(Header);
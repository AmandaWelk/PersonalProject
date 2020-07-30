import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearUser} from '../../redux/reducer';
import axios from 'axios';

class Header extends Component {

    handleLogout = () => {
        axios.get('/auth/logout')
        .then(() => {
            this.props.clearUser();
        })
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
            <Link to='/booking'><button>Book a Tee-Time</button></Link>
            <Link to='/scores'><button>Enter Your Scores</button></Link>
            <Link to='/info'><button>Course Information</button></Link>
            <Link to='/renew'><button>Renew Membership</button></Link>
            <Link to='/'><button onClick={this.handleLogout}>Logout</button></Link>
        </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {clearUser})(Header);
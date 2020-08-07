import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import axios from 'axios';

const Home = () => {

    return(
        <div className="home">
            <h1 className="welcome">Welcome to Lakeside Woods Country Club!</h1>
            <div className="home-sections">
                <section id="section1">
                    <h4 className="teetitle">Tee-Times</h4>
                    <p id="boxtext">To view your upcoming tee-times, book a new tee-time or manage an existing tee-time click here:</p>
                    <Link to='/booking'><button className="click">Click Here</button></Link>
                </section>
                <section id="section2">
                    <h4 className="memtitle">Membership Payments</h4>
                    <p id="boxtext">To view your most recent membership payment or renew your membership click here:</p>
                    <Link to='/renew'><button className="click">Click Here</button></Link>
                </section>
                <section id="section3">
                    <h4 className="infotitle">Course Information</h4>
                    <p id="boxtext">To view our scorecard and see what other amenities our course offers click here:</p>
                    <Link to='/info'><button className="click">Click Here</button></Link>
                </section>
            </div>
        </div>
    )
}

export default Home;
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Scores from './Components/Scores/Scores';
import Renew from './Components/Renew/Renew';
import CourseInfo from './Components/CourseInfo/CourseInfo';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/home' component={Home} />
        <Route path='/booking' component={Booking} />
        <Route path='/scores' component={Scores} />
        <Route path='/renew' component={Renew} />
        <Route path='/info' component={CourseInfo} />
    </Switch>
)
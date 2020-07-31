import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import routes from './routes';
import {withRouter} from 'react-router-dom';


const App = props => {
  return(
    <div>
      {props.location.pathname !== '/'
      ?
      <Header />
      :
      null}
      {routes}
    </div>
  );
}

export default withRouter(App);

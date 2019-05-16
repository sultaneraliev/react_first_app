import React from 'react';
import Home from './home';
import About from './About';
import Contacts from './contacts';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class Navigation extends React.Component{
  render(){
    return(
      <BrowserRouter history={history}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>

      <hr/>

      <Route exact path ="/" component={Home} />
      <Route path ="/about" component={About} />
      <Route path ="/contacts" component={Contacts} />

      </BrowserRouter>

     )
  }
}
export default Navigation;


     
  



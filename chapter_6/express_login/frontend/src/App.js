import React from 'react';
import './App.css';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./component/signUp";
import Login from "./component/login";
import Admin from "./component/admin";
function App() {
  return (
    <div>
      <BrowserRouter>
          <navBar className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div >
                <ul className="navbar-nav">
                  <li className="nav-item active"><Link to="/" className="nav-link">SignUp</Link></li>
                  <li className="nav-item active"><Link to="/Login" className="nav-link">Login</Link></li>
                  <li className="nav-item active"><Link to="/Admin" className="nav-link">Admin</Link></li>
                </ul>
            </div>
          </navBar>
          <Switch>
              <Route path="/" component={SignUp}></Route>
              <Route path="/admin" component={Admin}></Route>
              <Route exact path="/login" component={Login}></Route>
          </Switch>
            
      </BrowserRouter>
    </div>
  )
}

export default App;

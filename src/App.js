import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Home from './Home';
import Learn from './Learn';
import Teach from './Teach';
import ContactUs from './ContactUs';



function App() {

  //Component names use below syntax always
  // function LoginForm

  //camelCasing always use this syntax for variable names
  // const userFirstName = '';
  return (
    
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/learn' exact>
          <Learn/>
        </Route>
        <Route path='/teach' exact>
          <Teach/>
        </Route>
        <Route path='/contact-us' exact>
          <ContactUs/>
        </Route>
        <Route path='/login' exact>
          <LoginForm/>
        </Route>
        <Route path='/sign-up' exact>
          <SignUpForm/>
        </Route>
      </Switch>
    </Router>
    // <div className="App">
       /* <div> 
        <LoginForm/>
      </div>
      <div> 
        <SignUpForm/>
      </div> */
    // </div>

  );
}

export default App;

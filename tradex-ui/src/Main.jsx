import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import Signup from './Signup.jsx';
import About from './About.jsx';
import Login from './Login.jsx';
import ContactUs from './ContactUs.jsx';

function NotFound() {
  return <h1>You Lost?</h1>;
}

export default function Contents() {
  
  return (
    <Switch>
      <Redirect exact from="/" to="/land" />
      <Route path="/land" component={LandingPage} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={ContactUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

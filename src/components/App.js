import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import NavBar from './NavBar';
import '../App.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <NavBar />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

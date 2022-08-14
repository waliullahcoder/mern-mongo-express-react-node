import React, { Component } from 'react';
import {BrowserRouter, Route, Routes  } from "react-router-dom";

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" exact element={ <Landing/> } />
      <Route path="/register" exact element={ <Register/> } />
      <Route path="/login" exact element={ <Login/> } />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    </Provider>
    );
  }
}

export default App;

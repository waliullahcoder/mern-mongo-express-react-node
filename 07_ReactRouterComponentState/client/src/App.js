import React, { Component } from 'react';

import {BrowserRouter, Route, Routes  } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      {/* <div className="container"> */}
      <Route path="/" exact element={ <Landing/> } />
      <Route path="/register" exact element={ <Register/> } />
      <Route path="/login" exact element={ <Login/> } />
      {/* </div> */}
      </Routes>
      </BrowserRouter>
   
      <Footer />
    </div>
     
    //   <BrowserRouter>
    //   <div className="App">
    //     <Navbar />
    //     <Route exact path="/" component={Landing} />
    //     <div className="container">
    //     <Routes>
    //       <Route exact path="/register" component={Register} />
    //       <Route exact path="/login" component={Login} />
    //     </Routes>
    //     </div>
    //     <Footer />
    //   </div>
    // </BrowserRouter>
    );
  }
}

export default App;

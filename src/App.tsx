import React, {FC, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MachaInternshipAndStudent from "./schoolClient/sections/pages/MachaInternshipAndStudent";
import SearchPage from "./schoolClient/sections/pages/SearchPage";
import Profile from "./schoolClient/sections/pages/Profile";
import Favorite from "./schoolClient/sections/pages/Favorite";
import NavBar from './schoolClient/sections/components/headerComponents/navbar/NavBar';
import LandingPage from "./schoolClient/sections/pages/LandingPage";
import Support from "./schoolClient/sections/pages/Support";
import Footer from './schoolClient/sections/components/headerComponents/Footer';
import ContactPage from "./schoolClient/sections/pages/ContactPage";




const App:FC<{}> = () =>{

  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/home" component={LandingPage}/>
          <Route exact path="/machaInternshipAndStudent" component={MachaInternshipAndStudent}/>
          <Route exact path="/search" component={SearchPage}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/favorite" component={Favorite}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/support" component={Support}/>
        </Switch>
        <Footer/>
      </Router>
  );
}
export default App;

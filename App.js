import React, { useState,useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Landing from './components/landing/Landing'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Items from './components/cart/Items'
import cartAdded from './components/cart/cartAdded'


const App =()=> {


    

  
    return (

      <BrowserRouter>

        <Switch>


          <div className="App">

            <Navbar />


            <Route exact path="/ReactJs-Ecommerce" component={Landing} />

            <Route path="/signin" component={SignIn} />

            <Route path="/signup" component={SignUp} />

            <Route path="/items" component={Items} />

            <Route path="/cart" component={cartAdded}/>





          </div>

        </Switch>



      </BrowserRouter>

    );

  
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import './App.css';
import BusinessHome from "../pages/bussines-home/Business-home";
import Home from "../pages/home/Home";
import SignupSuccess from "../pages/signup-success";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function App() {
    return (
        // add main-container container class for business pages
    <main className="min-vh-100">
            <Header/>

            <Router>
                <Switch>
                    <Route path="/business-home" component={BusinessHome}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/signup-success" component={SignupSuccess}/>
                    <Redirect to="/signup-success"/>
                </Switch>
            </Router>

            <Footer/>
        </main>
    );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import './App.css';

import PaymentSettings from "../pages/paymant-settings/Payment-settings";
import BusinessHome from "../pages/bussines-home/Business-home";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function App() {
    return (
        <div className="App main-container min-vh-100">
            <Header/>

            <Router>
                <Switch>
                    <Route path="/business-home" component={BusinessHome}/>
                    <Route exac path="/payment-settings" component={PaymentSettings}/>
                    <Redirect to="/payment-settings"/>
                </Switch>
            </Router>

            <Footer/>
        </div>
    );
}

export default App;

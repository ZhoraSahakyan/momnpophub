import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

import PaymentSettings from "../pages/paymant-settings/Payment-settings";
import BusinessHome from "../pages/bussines-home/Business-home";
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
                    <Route path="/signup-success" component={SignupSuccess}/>
                    <Route exac path="/payment-settings" component={PaymentSettings}/>
                </Switch>
            </Router>

            <Footer/>
        </main>
    );
}

export default App;

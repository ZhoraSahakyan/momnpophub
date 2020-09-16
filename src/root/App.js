import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";

import './App.css';
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
                    <Redirect to="/business-home"/>
                </Switch>
            </Router>

            <Footer/>
        </div>
    );
}

export default App;

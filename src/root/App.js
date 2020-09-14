import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import './App.css';
import BusinessHome from "../pages/bussines-home/Business-home";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";

function App() {
    return (
        <div className="App">
            <Header/>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/business-home" component={BusinessHome}/>
                    <Redirect to="/"/>
                </Switch>
            </Router>

            <Footer/>
        </div>
    );
}

export default App;

import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignIn from "./components/auth/SignIn"
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import NavBar from './components/layout/NavBar';
//notification pop up
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <NavBar/>
    <Switch>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/" component={Home}/>
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;

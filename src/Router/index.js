import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Register from '../components/RegisterForm';
import Login from '../components/LoginForm';
import PostDetails from '../components/PostDetails';
import Profile from '../components/Profile';
import Dashboard from '../components/Dashboard';

function index() {
    return (
        <>
           <Router>
             <NavBar />
             <Switch>
                 <div className="container">
                 <Route exact path="/" component={Home}/>
                 <Route path="/login" component={Login} />
                 <Route path="/register" component={Register} />
                 <Route path="/postDetails/:id" component={PostDetails} />
                 <Route path="/profile" component={Profile} />
                 <Route path="/dashboard" component={Dashboard} />
                 </div>
             </Switch>
           </Router>   
        </>
    )
}

export default index

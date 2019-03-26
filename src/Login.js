import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import './App.css';
class Login extends Component {
    btnclck = () => {
        axios.post('https://reqres.in/api/login', {
                email: this.refs.email.value,
                password: this.refs.password.value
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    render() {
        return (
          <div>
          <div className="LoginMain">
    <input type="email" ref="email" placeholder="enter email" /><br />
    <input type="password" ref="password" placeholder="enter password" /><br />
    <button onClick={this.btnclck}>Login</button>
        </div>
        </div>
        );
    }
}
export default Login;
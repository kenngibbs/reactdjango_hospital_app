import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

function Login() {
    return (
        <div id="index_container">

        <h2 id="logo_header">Strategic Health</h2>

        <div id="intro_form">
            <h2 id="home_form_label">Log In</h2>

            {/* TODO Once validated, go to home page */}
            <form method="POST">
                {/* TODO Validate If the username/password is correct */}
                {/* If there is an error, include this line */}
                <h3 id="index_error">No error here yet</h3>

                <label for="django_username">Enter your username</label>
                <input type="text" id="django_username" name="django_username" className="form_input"/>

                <label for="django_password">Enter your password</label>
                <input type="password" id="django_password" name="django_password" className="form_input"/>

                <button className="form_input" id="intro_form_button">Submit</button>
            </form>

            <h4>OR <Link to="/new_contact">Create a New User</Link></h4>
        </div>

        <div id="index_footer">
            <p>Created By <a href="https://www.linkedin.com/in/kenngibbs/" target="_blank" rel="noopener noreferrer">Kenn Gibbs</a></p>
        </div>
        </div>
    )
};

export default Login;
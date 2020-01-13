import React, { useState } from 'react';
import {Link, Redirect} from "react-router-dom";
import Cookies from 'js-cookie';
import './App.css';

let _csrfToken = null;

async function getCsrfToken() {
    _csrfToken = Cookies.get('csrftoken'); // or the value from settings.CSRF_COOKIE_NAME

    if (!_csrfToken)
    {
        console.log("Didn't find stored CSRF token in cookie");
        const response = await fetch("http://localhost:8000/csrf/", {
        credentials: "include",
        });
        const data = await response.json();
        _csrfToken = data.csrfToken;
    }
    
    return _csrfToken;
}

function Login() {
    
    const [auth_user, set_auth_user] = useState({});
    const [error, setError] = useState("");

    async function check_authenticity() {

        let messageBody = {
            'django_username': document.getElementById("django_username").value,
            'django_password': document.getElementById("django_password").value,
        }

        const response = await fetch("http://localhost:8000/login_auth/",
        {
            method: "POST",
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': await getCsrfToken(),
            },
            credentials: 'include',
            body: JSON.stringify(messageBody)
        });
        const data = await response.json();
        console.log(data);

        if (data.result === "false")
            setError(data.message);
        else{
            console.log("go to home page");
            console.log(data.hospital_info);
            set_auth_user({
                'username': data.username,
                'hospital_info': data.hospital_info,
            })
            // console.log(auth_user["hospital_info"]);
        }
    }

    var submit_login = async(e) =>{
        e.preventDefault();
        await check_authenticity();
    }

    if (auth_user["username"])
        return <Redirect to="/home" />
    else{
        return (
        <div id="index_container">

        <h2 id="logo_header">Strategic Health</h2>

        <div id="intro_form">
            <h2 id="home_form_label">Log In</h2>

            {/* TODO Once validated, go to home page */}
            <form method="POST" onSubmit={submit_login}>
                {/* If there is an error, include this line */}
                {error ?  <h3 id="index_error">{error}</h3> : ""}

                <label htmlFor="django_username">Enter your username</label>
                <input type="text" id="django_username" name="django_username" className="form_input"/>

                <label htmlFor="django_password">Enter your password</label>
                <input type="password" id="django_password" name="django_password" className="form_input"/>

                <button className="form_input" id="intro_form_button">Submit</button>
            </form>

            <h4>OR <Link to="/new_contact">Create a New User</Link></h4>
        </div>

        <div id="index_footer">
            <p>Created By <a href="https://www.linkedin.com/in/kenngibbs/" target="_blank" rel="noopener noreferrer">Kenn Gibbs</a></p>
        </div>
        </div>
    )}
};

export default Login;
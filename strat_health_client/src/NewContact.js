import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './App.css';
import Cookies from 'js-cookie';

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

function NewContact() {

    const [hospital_list, set_hospital_list] = useState([]);
    const [error, setError] = useState("");

    async function add_new_contact() {

        var select1 = document.getElementById("contact_hospital_list");
        var selected1 = [];
        for (var i = 0; i < select1.length; i++) {
            if (select1.options[i].selected)
                selected1.push(select1.options[i].value);
        }
        console.log(selected1);
    
        let messageBody = {
            'django_username': document.getElementById("django_username").value,
            'django_password': document.getElementById("django_password").value,
            'contact_name': document.getElementById("contact_name").value,
            'contact_address': document.getElementById("contact_address").value,
            'contact_phone': document.getElementById("contact_phone").value,
            'contact_position': document.getElementById("contact_position").value,
            'contact_hospital_list': selected1
        }
    
        const response = await fetch("http://localhost:8000/new_contact_add/",
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
        
        if(data.result === "error")
            setError(data.message);
        else
            console.log("Data submitted sucessfully")
            console.log(data.result);
    }

    var submit_new_contact = async (e)=> {
        e.preventDefault();
        await add_new_contact();
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8000/hospital/")
            const data = await response.json();
            console.log(data);
            set_hospital_list(data);
        }
        fetchData();
    }, []);

    return (
        <div id="index_container">

            <h2 id="logo_header">Strategic Health</h2>

            <div id="intro_form">
                <h2 id="home_form_label">Create New User</h2>

                <form method="POST" onSubmit={submit_new_contact}>
                    {/* If there is an error, include this line */}
                    {error ?  <h3 id="index_error">{error}</h3> : ""}

                    <label htmlFor="django_username" >Username: </label>
                    <input type="text" id="django_username" name="django_username" className="form_input"/>

                    <label htmlFor="django_password">Password: </label>
                    <input type="password" id="django_password" name="django_password" className="form_input"/>

                    <label htmlFor="contact_name" >First and Last Name: </label>
                    <input type="text" id="contact_name" name="contact_name" className="form_input"/>

                    <label htmlFor="contact_address">Address: </label>
                    <input type="text" id="contact_address" name="contact_address" className="form_input"/>

                    <label htmlFor="contact_phone" >Phone Number: </label>
                    <input type="text" id="contact_phone" name="contact_phone" className="form_input"/>

                    <label htmlFor="contact_position">Job Title: </label>
                    <input type="text" id="contact_position" name="contact_position" className="form_input"/>

                    {/* Includes a list of all of the available hospitals */}
                    <label htmlFor="contact_hospital_list">Choose the hospital(s):</label>
                    <select name="contact_hospital_list" id="contact_hospital_list" className="form_input" multiple>
                    {hospital_list.map(eachHospital => 
                        <option key={eachHospital.id} value={eachHospital.id}>
                            {eachHospital.hospital_name}
                        </option>)}
                    </select>

                    <button className="form_input" id="intro_form_button">Submit</button>
                </form>

                <h4>OR <Link to="/">Go Back Home</Link></h4>
            </div>

            <div id="index_footer">
                <p>Created By <a href="https://www.linkedin.com/in/kenngibbs/" target="_blank" rel="noopener noreferrer">Kenn Gibbs</a></p>
            </div>
        </div>
    )
};

export default NewContact;
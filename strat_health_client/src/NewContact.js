import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

function NewContact() {
    return (
        <div id="index_container">

            <h2 id="logo_header">Strategic Health</h2>

            <div id="intro_form">
                <h2 id="home_form_label">Create New User</h2>

                {/* TODO Submit all contact info */}
                <form method="POST">
                    {/* TODO Validate for a unique user */}
                    {/* If there is an error, include this line */}
                    <h3 id="index_error">No error here yet</h3>

                    <label for="django_username" >Username: </label>
                    <input type="text" id="django_username" name="django_username" class="form_input"/>

                    <label for="django_password">Password: </label>
                    <input type="password" id="django_password" name="django_password" class="form_input"/>

                    <label for="contact_name" >First and Last Name: </label>
                    <input type="text" id="contact_name" name="contact_name" class="form_input"/>

                    <label for="contact_address">Address: </label>
                    <input type="password" id="contact_address" name="contact_address" class="form_input"/>

                    <label for="contact_phone" >Phone Number: </label>
                    <input type="text" id="contact_phone" name="contact_phone" class="form_input"/>

                    <label for="contact_position">Job Title: </label>
                    <input type="password" id="contact_position" name="contact_position" class="form_input"/>

                    {/* TODO Get list of all hospitals to make as options */}
                    {/* <label for="contact_hospital_list" >Username: </label>
                    <input type="text" id="contact_hospital_list" name="contact_hospital_list" class="form_input"/> */}

                    <button class="form_input" id="intro_form_button">Submit</button>
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
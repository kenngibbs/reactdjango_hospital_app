import React from 'react';
import './Home.css';

function Home() {
    return (
        //Test this above the inside of return
        <div id="index_container">
        {/* The 1st grid to style the entire page is above */}

            <div className="header" id="logo_header">
                <h2 >Strategic Health</h2>
            </div>

        {/* <div class="header" id="home_top_middle">
            <h3 id="home_form_label">Welcome {{ contact_name }}</h3>
        </div> */}

            <div className="header" id="home_top_right">
                <h4>Logged in as Contact_Name</h4><a href="{% url 'log_user_out' %}">Log Out</a>
            </div>

            {/* 2nd grid to dynamically list all of the hospitals */}
            {/* {% if hospital_info|length > 0 %} */}
                <div id="home_form">
                    {/* Using a dictionary of all hospitals with their information provided. */}
                    {/* {% for key, value in hospital_info.items %} */}

                        {/* 3rd grid to style each hospital */}
                        <div id="hospital_container">
                            <h2 id="hospital_name" className="center_text"> Hospital Name</h2>
                            <h3 id="hospital_address" className="center_text"> Hospital Address</h3>
                            <div id="hospital_staff">
                                <h4>Staff</h4>
                                
                                <p>Average Salary: Average Salary</p>
                                <p>Highest Paid Staff: Highest Paid Staff</p>
                            </div>
                            <div id="hospital_procedure">
                                <h4>Procedures</h4>
                                {/* {% if value.number_of_procedures > 0 %}
                                    <p>Average Procedure: ${{ value.avg_procedure_cost|floatformat:0|intcomma }}</p>
                                    <p>Highest Procedure: ${{ value.highest_cost_procedure|floatformat:0|intcomma }}</p>
                                    <p>Number of Procedures: {{ value.number_of_procedures|intcomma }}</p>
                                {% else %}
                                    <p>None</p>
                                {% endif %} */}
                            </div>

                        </div>

                    <div id="index_footer">
                        <p>Created By <a href="https://www.linkedin.com/in/kenngibbs/" target="_blank"  rel="noopener noreferrer">Kenn Gibbs</a></p>
                    </div>


        {/* <!--         A list(array) of hospital objects with it's necessary information. Same information as above.-->
        <!--            <ul>-->
        <!--                {% for each_hospital in hospital_info %}-->
        <!--                    <li>-->
        <!--                        <h3>{{ each_hospital.name }}</h3>-->
        <!--                        <p>average salary is {{ each_hospital.salary_average  }} and highest paid staff is {{ each_hospital.highest_paid_staff }}</p>-->
        <!--                    </li>-->
        <!--                {% endfor %}-->
        <!--            </ul>--> */}

                </div>

            {/* <h3 id="zero_hospitals">No hospitals attached to this user.</h3> */}


        </div>
    )
};

export default Home;
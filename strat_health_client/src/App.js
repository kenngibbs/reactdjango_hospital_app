// src/App.js

// import React, { Component } from 'react';

// const API_HOST = 'http://localhost:8000';

// let _csrfToken = null;

// async function getCsrfToken() {
//   if (_csrfToken === null) {
//     const response = await fetch(`${API_HOST}/csrf/`, {
//       credentials: 'include',
//     });
//     const data = await response.json();
//     _csrfToken = data.csrfToken;
//   }
//   return _csrfToken;
// }

// async function testRequest(method) {
//   const response = await fetch(`${API_HOST}/ping/`, {
//     method: method,
//     headers: (
//       method === 'POST'
//         ? {'X-CSRFToken': await getCsrfToken()}
//         : {}
//     ),
//     credentials: 'include',
//   });
//   const data = await response.json();
//   return data.result;
// }


// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       testGet: 'KO',
//       testPost: 'KO',
//     };
//   }

//   async componentDidMount() {
//     // console.log("Test GET");
//     // console.log(await testRequest('GET'));

//     this.setState({
//       testGet: await testRequest('GET'),
//       testPost: await testRequest('POST'),
//     });
//   }

//   render() {
//     console.log("get");
//     console.log(this.state.testGet);
//     console.log("post");
//     console.log(this.state.testPost);
//     return (
//       <div>
//         <p>Test GET request: {this.state.testGet}</p>
//         <p>Test POST request: {this.state.testPost}</p>
//       </div>
//     );
//   }
// }

// export default App;





import React from 'react';
import './App.css';
import Login from './Login';
import NewContact from './NewContact';
// import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Login Page</Link>
            </li>
            <li>
              <Link to="/new_contact">New Contact</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            
            <Route path="/new_contact">
                <NewContact />
            </Route>
            {/* <Route path="/home">
                <Home />
            </Route> */}
            <Route path="/">
                <Login />
            </Route>

        </Switch>
      </div>
    </Router>


    
  );
}


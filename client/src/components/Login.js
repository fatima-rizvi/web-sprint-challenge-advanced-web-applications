import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const initialValues = {
  credentials: {
    username: '',
    password: ''
  }
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState(initialValues)
  //const credentials = { username: 'Lambda School', password: 'i<3Lambd4'}

  const handleChange = (e) => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
  }

  const { push } = useHistory();

  const submitValues = (e) => {
    e.preventDefault()
    console.log(credentials)
    axios.post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        console.log('login res: ', res)
        window.localStorage.setItem("token", res.data.payload);
        push("/protected");
      })
      .catch((err) => {
        console.log('Login error: ', err)
      });

  }


  return (
    <>
      <div>
        <h1>Login Form:</h1>
        <form onSubmit={submitValues}>
          <label> Username: 
            <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            />
          </label>
        <label> Password:
          <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
        </label>
          <button>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import axios from 'axios';



const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const credentials = { username: 'Lambda School', password: 'i<3Lambd4'}

  axios.post('http://localhost:5000/api/login', credentials)
    .then((res) => {
      console.log('login res: ', res)
      window.localStorage.setItem("token", res.data.payload);
      this.props.history.push("/protected");
    })
    .catch((err) => {
      console.log('Login error: ', err)
    });


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;

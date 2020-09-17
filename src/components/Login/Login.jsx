import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
    // some fancy firebase login
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it succesfully created a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    // do some fancy firebase register
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png'
          alt=''
          className='login_logo'
        />
      </Link>
      <div className='login_container'>
        <h1>Sign In</h1>
        <form action=''>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} className='login_signInButton' type='submit'>
            Sign In
          </button>
          <p>
            By signing-in you agree to the AMAZON CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice
          </p>
          <button onClick={register} className='login_registerButton'>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, {useState, useEffect} from "react";
import { loginUser, registerUser } from "../api-adapter";

const LoginPage = ({
    setUsernameInput,
    setPasswordInput,
    setToken,
    setLoginMessage,
    usernameInput,
    passwordInput,
    token,
    loginMessage

}) => {

    function submitRegister()  {
        console.log(usernameInput, "testing username on submit")
        registerUser(usernameInput, passwordInput, setToken)
    }

    useEffect(() => {
      }, [usernameInput, passwordInput]);

    function submitLogin(){
      loginUser(usernameInput, passwordInput)
    }  


    return(
        <div id="wholepage">
      <p>{loginMessage}</p>
      <div id="loginform">
        <p id="logintag">Login or register below</p>
        <label id="prompt">Please enter username:</label>
        <br />
        <input
          type="text"
          required
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)}
        />

        <label>
          <br />
          Please enter password:
        </label>
        <br />
        <input
          type="text"
          required
          value={passwordInput}
          onChange={(event) => setPasswordInput(event.target.value)}
        />
        <br />
        <button onClick={() => submitLogin()}>Login</button>
        <button onClick={() => submitRegister()}>Register</button>
      </div>
    </div>

    )
}

export default LoginPage;
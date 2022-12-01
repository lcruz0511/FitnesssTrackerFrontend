import React, {useState, useEffect} from "react";
import { loginUser, registerUser } from "../api-adapter";
import "./LoginPage.css"

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

  const [registerMessage, setRegisterMessage] = useState("")
  const [loginSubmitMessage, setLoginSubmitMessage] = useState("")

    function submitRegister()  {
        console.log(usernameInput, "testing username on submit")
        registerUser(usernameInput, passwordInput, setToken, setRegisterMessage)
        setLoginSubmitMessage("")
    }

    useEffect(() => {
      }, [usernameInput, passwordInput]);

    async function submitLogin(){
     await loginUser(usernameInput, passwordInput, setLoginSubmitMessage)
      setRegisterMessage("")
      
    }  


    return(
        <div id="wholepage">
      <p>{loginMessage}</p>
      <div id="loginform">
        <h3>Already have an account? Log in below!</h3>
        <p id="logintag">Login or register</p>
        <label id="prompt">Enter Username:</label>
        <br />
        <input
          type="text"
          placeholder="Username"
          required
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)}
        />

        <label>
          <br />
          Enter Password:
        </label>
        <br />
        <input
          type="text"
          placeholder="Password"
          required
          value={passwordInput}
          onChange={(event) => setPasswordInput(event.target.value)}
        />
        <br />
        <button onClick={() => submitLogin()}>Login</button>
        <button onClick={() => submitRegister()}>Register</button>
      </div>
      <div>{[registerMessage, loginSubmitMessage]}</div>
    </div>

    )
}

export default LoginPage;
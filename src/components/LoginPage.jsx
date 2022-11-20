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

  const [registerMessage, setRegisterMessage] = useState("")
  const [loginSubmitMessage, setLoginSubmitMessage] = useState("")

    function submitRegister()  {
        console.log(usernameInput, "testing username on submit")
        registerUser(usernameInput, passwordInput, setToken, setRegisterMessage)
        setLoginSubmitMessage("")
    }

    useEffect(() => {
      }, [usernameInput, passwordInput]);

    function submitLogin(){
      loginUser(usernameInput, passwordInput, setLoginSubmitMessage)
      setRegisterMessage("")
      
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
      <div>{[registerMessage, loginSubmitMessage]}</div>
    </div>

    )
}

export default LoginPage;
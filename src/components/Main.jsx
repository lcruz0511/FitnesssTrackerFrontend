
import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import Routines from "./Routines";


import{
    RouterProvider,
    Route,
    Link,
    Switch,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

const Main = () => {
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [token, setToken] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Navbar />}>
            <Route
              path="login"
              element={
                <LoginPage
                  //send values here
                  setUsernameInput = {setUsernameInput}
                  setPasswordInput = {setPasswordInput}
                  setToken = {setToken}
                  setLoginMessage = {setLoginMessage}
                  usernameInput = {usernameInput}
                  passwordInput = {passwordInput}
                  token = {token}
                  loginMessage = {loginMessage}
                />
              }
            ></Route>
    
            <Route path="/routines" element={<Routines />}></Route>
    
            {/* <Route
              path="messages"
              element={<Messages loginToken={loginToken} />}
            ></Route> */}
    
            {/* <Route index element={<Posts />}></Route> */}
          </Route>
        )
      );

    return(
        <main>
            <div id="main">
                <RouterProvider router={router}></RouterProvider>
            </div>
        </main>
    )

};

export default Main;

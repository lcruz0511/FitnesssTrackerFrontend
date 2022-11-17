import React, { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom"
import { getMyRoutines, addRoutine, deleteRoutine } from "../api-adapter";

const MyRoutines = (props) =>    {

    function submitRoutine()    {
        addRoutine(name, goal, isPublic, setGetRoutinesMessage)
    }
    const [name, setname] = useState("")
    const [goal, setgoal] = useState("")
    const [isPublic, setIsPublic] = useState("")
    const [myRoutines, setMyRoutines] = useState("")
    const [getRoutinesMessage, setGetRoutinesMessage] = useState("")


    useEffect(()=>{
        async function fetchRoutines(){
            const placeholder = await getMyRoutines(setMyRoutines);
            console.log(myRoutines, "is all my routines")
        }
        fetchRoutines();
    }, [])
    async function handleDelete(event){
        event.preventDefault();
        const toDelete = event.target.id;
        const token = localStorage.getItem("token");
        const deleted = await deleteRoutine(toDelete, token)
}

console.log(myRoutines, "this is my routines")

// create routine is workin
return(
    <div id="wholecontainer">
        <div className="rightRoutine">
            {}

        </div>
       

        <div>

        </div>
     
        

        <h1>My Routines</h1>
        <h1>Create routine: </h1>
        <h4>Routine name:</h4>
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setname(event.target.value)}
        />
        <h4>Routine goal:</h4>
        <input
          type="text"
          required
          value={goal}
          onChange={(event) => setgoal(event.target.value)}
        />
         <h4>Privacy status (true or false)</h4>
        <input
          type="text"
          required
          value={isPublic}
          onChange={(event) => setIsPublic(event.target.value)}
        />
        <button onClick={() => submitRoutine()}>Submit new routine</button>
        <div id="submitMessage">{getRoutinesMessage}</div>
        <button
        className="deleteButton"
        id={myRoutines._id ? `${routine._id}` : null}
        onClick={(event)=>{
            handleDelete(event)
        }}
        >
            Delete Routine
        </button>
    </div>
)
}

export default MyRoutines
import React, { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom"
import { getMyRoutines, addRoutine } from "../api-adapter";

const MyRoutines = () =>    {
    const [name, setname] = useState("")
    const [goal, setgoal] = useState("")
    const [isPublic, setIsPublic] = useState("")
    const [myRoutines, setMyRoutines] = useState("")
    const [getRoutinesMessage, setGetRoutinesMessage] = useState("")

    function submitRoutine()    {
        addRoutine(name, goal, isPublic, setGetRoutinesMessage)
    }

useEffect(()=>{
    async function fetchRoutines(){
        const placeholder = await getMyRoutines(setMyRoutines);
    }
    fetchRoutines();
}, [])

console.log(myRoutines, "this is my routines")

// create routine is workin
return(
    <div id="wholecontainer">
        
    {/* {myRoutines.map(
        ({
            activities,
            creatorId,
            creatorName,
            goal,
            id,
            isPublic,
            name
    )} =>   (
        <div>

        </div>
    ) */}
        

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
    </div>
)
}

export default MyRoutines
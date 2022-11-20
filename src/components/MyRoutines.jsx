import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getMyRoutines, addRoutine, deleteRoutine } from "../api-adapter";
import EditRoutine from "./EditRoutine";
import "./MyRoutines.css"
import { updateRoutine } from "../api-adapter";

const MyRoutines = (props) => {
  async function submitRoutine() {
    addRoutine(name, goal, isPublic, setGetRoutinesMessage);
    let nothing = await getMyRoutines(setMyRoutines)
  }

  const [routineID, setRoutineID] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [updatedGoal, setUpdatedGoal] = useState("");


  const [name, setname] = useState("");
  const [goal, setgoal] = useState("");
  const [isPublic, setIsPublic] = useState("");
  const [myRoutines, setMyRoutines] = useState([]);
  const [getRoutinesMessage, setGetRoutinesMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [editPage, setEditPage] = useState("");

  const [nameEditor, setNameEditor] = useState("");
  const [goalEditor, setGoalEditor] = useState("");
  const [routineEditor, setRoutineEditor] = useState("");
  const [idEditor, setIdEditor] = useState("");
  const [formDetails, setFormDetails] = useState({
    name: "",
    goal: "",
  });

  function routineClicked(name, goal, routine, id) {
    setNameEditor(name);
    setGoalEditor(goal);
    setRoutineEditor(routine);
    setIdEditor(id);
  }

  useEffect(() => {
    async function fetchRoutines() {
      const placeholder = await getMyRoutines(setMyRoutines);
      
    }
    fetchRoutines();
  }, []);

  function handleChange(event) {
    event.preventDefault();
    const toUpdate = event.target.id;
    const update = event.target.value;
    const updatedForm = { ...formDetails, [toUpdate]: update };
    setFormDetails(updatedForm);
  }

  async function submitUpdate() {
    const tempToken = localStorage.getItem("token")
const placeholder = await updateRoutine(updatedName, routineID, updatedGoal, tempToken)
let nothing = await getMyRoutines(setMyRoutines)
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const updatedRoutine = await updateRoutine(formDetails, routine.id);
  }

  async function handleDelete(event) {
    event.preventDefault();
    const toDelete = event.target.id;
   
    const token = localStorage.getItem("token");
    const deleted = await deleteRoutine(toDelete, token, setDeleteMessage);
    let nothing = await getMyRoutines(setMyRoutines)
    
  }

  

  // create routine is workin
  return (
    <div id="wholecontainer">
      <h1>My Routines</h1>
        <div id="twoForms">
          <div id="firstForm">
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
          
          <button id="submitRoutine" onClick={() => submitRoutine()}>Submit new routine</button>
          <div id="submitMessage">{getRoutinesMessage}</div>
        </div>
       
       {/* second form is here */}
        <div id="secondForm">
        <h1>Update routine: </h1>
          <h4>Routine ID:</h4>
          <input
            type="text"
            required
            value={routineID}
            onChange={(event) => setRoutineID(event.target.value)}
          />
          <h4>Updated name:</h4>
          <input
            type="text"
            required
            value={updatedName}
            onChange={(event) => setUpdatedName(event.target.value)}
          />
          <h4>Updated goal</h4>
          <input
            type="text"
            required
            value={updatedGoal}
            onChange={(event) => setUpdatedGoal(event.target.value)}
          />
          {/* <div id="deleteMessage">{deleteMessage}</div> */}
          <button id="submitRoutine" onClick={() => submitUpdate()}>Submit updated routine</button>
          {/* <div id="submitMessage">{getRoutinesMessage}</div> */}
        </div>
        </div>
        <div id="deleteMessage">{deleteMessage}</div>
      <div id="myRoutines">
        {myRoutines.map((routine) => {
          return (
            <div className="routineBox">
              <div className="routineName">Name: {routine.name}</div>
              <div className="routineGoal">Goal: {routine.goal}</div>
              <div className="routineGoal">ID: {routine.id}</div>
              <div>{""}</div>

              <button
                className="deleteButton"
                id={routine.id ? `${routine.id}` : null}
                onClick={(event) => {
                  handleDelete(event);
                }}
              >
                Delete Routine
              </button>

              {/* GOTTA FIGURE OUT A WAY TO GET THIS DATA TO THE EDIT POST COMPONENT! */}

              {/* <div id="editPage">{editPage}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyRoutines;

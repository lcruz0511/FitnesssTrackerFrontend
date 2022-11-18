import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getMyRoutines, addRoutine, deleteRoutine } from "../api-adapter";
import EditRoutine from "./EditRoutine";

const MyRoutines = (props) => {
  function submitRoutine() {
    addRoutine(name, goal, isPublic, setGetRoutinesMessage);
  }
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
  const [formDetails, setFormDetails]=useState({
    name: "",
    goal: ""
  })

  function routineClicked(
    name, goal, routine, id
  ) {
    setNameEditor(name)
    setGoalEditor(goal)
    setRoutineEditor(routine)
    setIdEditor(id)
  }

  useEffect(() => {
    async function fetchRoutines() {
      const placeholder = await getMyRoutines(setMyRoutines);
      console.log(myRoutines, "is all my routines");
    }
    fetchRoutines();
  }, []);

  function handleChange(event){
    event.preventDefault();
    const toUpdate = event.target.id;
    const update = event.target.value;
    const updatedForm = {... formDetails, [toUpdate]: update};
    setFormDetails(updatedForm)
  }

  async function handleSubmit(event){
    event.preventDefault();

    const updatedRoutine = await updateRoutine(
      formDetails,
      routine.id
    )
  }

  async function handleDelete(event) {
    event.preventDefault();
    const toDelete = event.target.id;
    console.log(toDelete, "to delete");
    const token = localStorage.getItem("token");
    const deleted = await deleteRoutine(toDelete, token, setDeleteMessage);
  }

  console.log(myRoutines, "this is my routines");

  // create routine is workin
  return (
    <div id="wholecontainer">
     
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
      <div id="deleteMessage">{deleteMessage}</div>
      <button onClick={() => submitRoutine()}>Submit new routine</button>
      <div id="submitMessage">{getRoutinesMessage}</div>

      <div id="myRoutines">
        {myRoutines.map((routine) => {
          return (
            <div className="routineBox">
              <div className="routineName">Name: {routine.name}</div>
              <div className="routineGoal">Goal: {routine.goal}</div>

              <div>
                {""}
                  <form onChange={handleChange} onSubmit={handleSubmit}>
                    <h3 className="editName"> Edit Routine </h3>
                    <div className="editForm">
                      <label>Name: </label>
                      <input id="name" defaultValue={formDetails.name}/>
                      <label>Goal: </label>
                      <input id="goal" defaultValue={formDetails.goal}/>

                    </div>
                  </form>
              </div>

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
              <Link  onClick={() =>
           routineClicked(
            routine.name,
            routine.goal,
            routine,
            routine.id
           )}to="/EditRoutine">
              <button
                className="editButton"
                id={routine.id ? `${routine.id}` : null}
                onClick={(event) => {
                 return(
                    setEditPage(
                        <div>hi hi hi hi hi</div>
                    )
                 )
                }}
              >
                Edit Routine
              </button>
              
              </Link>
              {/* <div id="editPage">{editPage}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyRoutines;

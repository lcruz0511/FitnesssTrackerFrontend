import React, { useEffect, useState } from "react";
import { getActivities } from "../api-adapter";
import Routines from "./Routines";
import { addActivity, updateActivity } from "../api-adapter";
import "./Activities.css";

const Activities = (props) => {
  async function submitUpdate() {
    const tempToken = localStorage.getItem("token");
    updateActivity(
      updatedID,
      updatedName,
      updatedDescription,
      tempToken,
      setAddActivityMessage
    );
    const allActivities = await getActivities(setActivities);
  }
  async function submitActivity() {
    addActivity(newName, newDescription, setAddActivityMessage);
    const allActivities = await getActivities(setActivities);
  }

  const [activities, setActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [addActivityMessage, setAddActivityMessage] = useState("");

  const [updatedID, setUpdatedID] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    async function fetchActivities() {
      const allActivities = await getActivities(setActivities);
    }

    fetchActivities();
  }, []);

  function activityMatches(activity, text) {
    return activity.name.toLowerCase().includes(text);
  }
  const filteredActivities = activities.filter((activity) =>
    activityMatches(activity, searchTerm)
  );
  const activitiesToDisplay = searchTerm.length
    ? filteredActivities
    : activities;

  return (
    <div>
      <div id="twoForms">
        <div id="createActivity">
          <h1>Create new activity</h1>
          <h3>
            Name:{" "}
            <input
              type="text"
              className="searchBar"
              placeholder="..."
              value={newName}
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </h3>
          <h3>
            Description:{" "}
            <input
              type="text"
              className="searchBar"
              placeholder="..."
              value={newDescription}
              onChange={(event) => {
                setNewDescription(event.target.value);
              }}
            />
          </h3>
          <button onClick={() => submitActivity()}>Submit</button>
          <h4>{addActivityMessage}</h4>
        </div>

        <div id="secondForm">
          <h1>Update activity: </h1>
          <h3>Activity ID:</h3>
          <input
            type="text"
            placeholder="..."
            required
            value={updatedID}
            onChange={(event) => setUpdatedID(event.target.value)}
          />
          <h3>Updated name:</h3>
          <input
            type="text"
            placeholder="..."
            required
            value={updatedName}
            onChange={(event) => setUpdatedName(event.target.value)}
          />
          <h3>Updated description:</h3>
          <input
            type="text"
            placeholder="..."
            required
            value={updatedDescription}
            onChange={(event) => setUpdatedDescription(event.target.value)}
          />
          <br></br>
          <button onClick={() => submitUpdate()}>
            Submit updated activity
          </button>
          {/* <div id="submitMessage">{getRoutinesMessage}</div> */}
        </div>
      </div>
      <div className="searchBar">
        <p className="titleText">Search Activities: </p>
        <span className="Search">
          <input
            type="text"
            className="searchBar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </span>
      </div>
      <div className="right">
        {activitiesToDisplay.map((activity) => {
          return (
            <div className="ActivitiesBox">
              <div className="activityName">Name: {activity.name}</div>
              <div className="activityDescription">
                Description: {activity.description}
              </div>
              <div className="activityID">Activity ID: {activity.id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Activities;

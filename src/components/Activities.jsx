import React, {useEffect, useState} from "react"
import { getActivities } from "../api-adapter";
import Routines from "./Routines";
import { addActivity } from "../api-adapter";
import "./Style.css";


const Activities = (props) =>       {

    function submitActivity()   {
        addActivity(newName, newDescription, setAddActivityMessage)
    }
        
    const [activities, setActivities] = useState([]);
    const [searchTerm, setSearchTerm]= useState("");
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [addActivityMessage, setAddActivityMessage] = useState("")
    console.log(newName)

    useEffect(() => {
       async function fetchActivities(){
        const allActivities= await getActivities(setActivities)
        console.log(activities, "is all activities")
       }

        fetchActivities()
      }, []);

      function activityMatches(activity, text){
        return(
            activity.name.toLowerCase().includes(text)
        )
      }
      const filteredActivities = activities.filter((activity)=>activityMatches(activity, searchTerm));
      const activitiesToDisplay = searchTerm.length ? filteredActivities: activities;
      

// FOR BELOW, activities IS THE RESULT OF THE GETACTIVITIES FETCH REQUEST,
// WHICH IS WORKING CURRENTLY. NOW IT'S A MATTER OF DISPLAYING THAT INFORMATION
// WITH A .MAP

//remember that all this data is stored in an array, which is what map is good at iterating
//through
    return(
        <div>
            <div id="createActivity">
                <h2>Create new activity</h2>
                <h3>Name: <input
                    type="text"
                    className="searchBar"
                    placeholder="..."
                    value={newName}
                    onChange={(event)=>{
                        setNewName(event.target.value)
                    }}
                    /></h3>
                <h3>Description: <input
                    type="text"
                    className="searchBar"
                    placeholder="..."
                    value={newDescription}
                    onChange={(event)=>{
                        setNewDescription(event.target.value)
                    }}
                    /></h3>
                <button onClick={() => submitActivity()}>Submit</button>
                <h4>{addActivityMessage}</h4>
            </div>
            <div className="searchBar">
                <p className="titleText">Search Activities: </p>
                <span className="Search">
                    <input
                    type="text"
                    className="searchBar"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(event)=>{
                        setSearchTerm(event.target.value)
                    }}
                    />
                </span>
            </div>
            <div className="right">
                {activitiesToDisplay.map((activity)=>{
                    return(
                        <div className="ActivitiesBox">
                            <div className="activityName">Name: {activity.name}</div>
                            <div className="activityDescription">Description: {activity.description}</div>
                            
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
export default Activities;
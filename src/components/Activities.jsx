import React, {useEffect, useState} from "react"
import { getActivities } from "../api-adapter";
import "./Style.css";
import Routines from "./Routines";

const Activities = (props) =>
{
    const [activities, setActivities] = useState([]);
    const [searchTerm, setSearchTerm]= useState("");

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
                            <div className="acitivityName">Name: {activity.name}</div>
                            <div className="acitivityDescription">Description: {activity.description}</div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Activities;
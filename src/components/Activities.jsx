import React, {useEffect, useState} from "react"
import { getActivities } from "../api-adapter";
import Routines from "./Routines";

const Activities = () =>
{
    const [activities, setActivities] = useState("");

    useEffect(() => {
       async function fetchActivities(){
        await getActivities(setActivities)
       }

        fetchActivities()
      }, []);


console.log(activities, "is all activities")

// FOR BELOW, activities IS THE RESULT OF THE GETACTIVITIES FETCH REQUEST,
// WHICH IS WORKING CURRENTLY. NOW IT'S A MATTER OF DISPLAYING THAT INFORMATION
// WITH A .MAP

//remember that all this data is stored in an array, which is what map is good at iterating
//through
    return(
        <h1>Activities</h1>
    )
}
export default Activities;
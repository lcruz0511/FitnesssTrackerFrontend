import React, {useEffect, useState} from "react"
import { getActivities } from "../api-adapter";

const Activities = () =>    {
    const [activities, setActivities] = useState("noactivities");

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
<div>
    <h1>Activities</h1>
    
</div>
    )
}

export default Activities;
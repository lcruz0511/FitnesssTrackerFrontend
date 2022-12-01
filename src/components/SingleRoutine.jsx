import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addActivityToRoutine } from "../api-adapter";
import Routines from "./Routines";

//// 1- link on name of the routine sends the user to activities. 
// set route for /routines/:routineId/

/// create new piece of state to select Routine, w/ onClick handler that will pass the routines

const SingleRoutine=(props)=>{
    const {id} = useParams();
    const routine = props.filerRoutines(id)[0];

    const [singleRoutine, setSingleRoutines] = useState([]);

    useEffect(() => {
        async function makeActivities(){
            setFormActivities({
                activityId: routine.routineId,
                count: routine.count,
                duration: routine.duration
            })
        }
        makeActivities;
    }, []);
    console.log(singleRoutine, "is this working")

    return(
        <div>
            {
                activity.length ? (
                    activitiesToDisplay.map((activities)=>{
                        return(
                            <div className="activitiesBox" key={`activity${id}`}>
                                <div className="activityTitle">{activity.title}</div>
                                </div>
                        )
                    })
                )
            }
        </div>
    )
}


export default SingleRoutine;
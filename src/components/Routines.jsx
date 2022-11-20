import React, { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom"
import { getRoutines } from "../api-adapter";
import "./Style.css"


const Routines= (props)=>{
    const [routines, setAllRoutines] = useState([]);
    const [searchTerm, setSearchTerm]= useState("");
    
   

    useEffect(()=>{
        async function fetchRoutines(){
            const allRoutines = await getRoutines(setAllRoutines);
            
        }
        fetchRoutines();
    }, [])

    function routineMatches(routine, text){
        return(
            routine.name.toLowerCase().includes(text)
        )
    };
    const filteredRoutines = routines.filter((routine)=> routineMatches(routine, searchTerm));
    const routinesToDisplay = searchTerm.length ? filteredRoutines: routines;
 

    return(
        <div>
            <div className="searchBar">
                <p className="titleText">Search Routines: </p>
                <span className="Search">
                    <input
                    type="text"
                    className="searchBar"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(event)=>{
                        setSearchTerm(event.target.value);
                    }}
                    />
                </span>
            </div>
            <div className='right' >
                {routinesToDisplay.map((routine)=>{
                    return (
                        <div className="routineBox">
                            <div className="routineName">Name: {routine.name}</div>
                            <div className="routineGoal">Goal: {routine.goal}</div>
                            <div className="routineName">Creator: {routine.creatorName}</div>


                        </div>
                    )
                })}
            </div>
        </div>
        
    )
    //There's so much data returned from that fetch request...
    //gonna have to find a way to only display a certain amount
}

export default Routines;
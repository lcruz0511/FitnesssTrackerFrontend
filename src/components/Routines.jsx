import React, { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom"
import { getRoutines } from "../api-adapter";


const Routines= (props)=>{
    const [routines, setAllRoutines] = useState([]);
    const [searchTerm, setSearchTerm]= useState("");
    
   

    useEffect(()=>{
        async function fetchRoutines(){
            const allRoutines = await getRoutines(setAllRoutines);
            
        }
        fetchRoutines();
    }, [])

    // function routineMatches(routine, text){
    //     return(
    //         routine.title.toLowerCase().includes(text)
    //     )
    // }
    console.log(routines, "is routines returned from request")

    //There's so much data returned from that fetch request...
    //gonna have to find a way to only display a certain ammount
    return(
        <h1>Routines</h1>
    )

}

 


export default Routines;
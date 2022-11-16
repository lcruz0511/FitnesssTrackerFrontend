import React, { useEffect } from "react";
import {Link, NavLink} from "react-router-dom"

const Routines= (props)=>{
    const [routines, setAllRoutines] = useState([]);
    const [searchTerm, setSearchTerm]= useState("");

    useEffect(()=>{
        async function fetchRoutines(){
            const allRoutines = await getRoutines();
            setAllRoutines(allRoutines)
        }
        fetchRoutines();
    }, [])
    function routineMatches(routine, text){
        return(
            routine.title.toLowerCase().includes(text)
        )
    }


    return(
    )


export default Routines;
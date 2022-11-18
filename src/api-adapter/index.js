// const baseUrl= "http://localhost:3000/api"
const baseUrl= "https://fitnesstrac-kr.herokuapp.com/api"

// export async function getRoutines(token){
//     const options = {
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`,
//         }
//     }
//     const response = await fetch(`${baseUrl}/routines`, options);
//     const result = await response.json();
//     const routines = result.data.routines;
//     return routines
// };


export async function registerUser(username, password, setToken, setRegisterMessage){

fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: `${username}`,
    password: `${password}`
  })
}).then(response => response.json())
  .then(result => {
    console.log(result)
    setToken(result.token)
    if (result.token){
        localStorage.removeItem("token");
        localStorage.setItem("token", result.token)
        localStorage.setItem("username", result.user.username)
      }
      if (result.message) {
        setRegisterMessage(result.message)
      }
      if (result.error) {
        setRegisterMessage(result.error)
      }
  })
  .catch(console.error);

 
}

export async function loginUser(username, password, setLoginSubmitMessage){
  
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login',  {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: `${username}`,
          password: `${password}`
        })
      }).then(response => response.json())
        .then(result => {
          if (result.error) {
            setLoginSubmitMessage(result.error)
          }
            if (result.message) {
              setLoginSubmitMessage(result.message)
            }
            localStorage.setItem("username", result.user.username)
          localStorage.setItem("token", result.token)
        })
        .catch(console.error);

}

export async function getRoutines(setAllRoutines){
    fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
        .then(result => {
        //   console.log(result, "is routines from index.js");
          if (result)   {
            setAllRoutines(result)
            // return(result)
          }
        })
        .catch(console.error);
}

export async function getActivities(setActivities){
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
  headers: {
    'Content-Type': 'application/json',
  },
}).then(response => response.json())
  .then(result => {
    console.log(result);
    setActivities(result)
    return(result)
  })
  .catch(console.error);
}

export async function getMyRoutines(setMyRoutines) {
    let tempname = localStorage.getItem("username");
    let temptoken = localStorage.getItem("token");
    console.log(tempname, temptoken )

    fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${tempname}/routines`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${temptoken}`
        },
      }).then(response => response.json())
        .then(result => {
          console.log(result, "result of get my routines");
          setMyRoutines(result)
        })
        .catch(console.error);
}

export async function addRoutine(name, goal, isPublic, setGetRoutinesMessage)  {
    let temptoken = localStorage.getItem("token");

    fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${temptoken}`
  },
  body: JSON.stringify({
    name: `${name}`,
    goal: `${goal}`,
    isPublic: `${isPublic}`
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
    if (result.error) {
      setGetRoutinesMessage(result.error)
    }
    if (result.id)  {
      setGetRoutinesMessage(`Routine titled ${name} has been succesfully created!`)
    }
  })
  .catch(console.error);
}

export async function addActivity(name, description, setAddActivityMessage) {
  let temptoken = localStorage.getItem("token");

  fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${temptoken}`
  },
  body: JSON.stringify({
    name: `${name}`,
    description: `${description}`
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
    if (result.error) {
      setAddActivityMessage(result.error)
    }
    if (result.id)  {
      setAddActivityMessage(`Activity "${name}" has been created succesfully!`)
    }
  })
  .catch(console.error);
}

export async function deleteRoutine(id, token, setDeleteMessage){
  fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then(response => response.json())
    .then(result => {
      console.log(result);
      if (result.success == true) {
        setDeleteMessage("Message deleted succesfully!")
      }
    })
    .catch(console.error);
}

export async function updateRoutine(name, id, goal, token){
  console.log(name, id, goal, token, "results passed into the function")
  fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, {
  method: "PATCH",
  headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    name,
    goal
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

export async function updateActivity(id, name, description, token){
  fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${id}`, {
  method: "PATCH",
  headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    name,
    description
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}
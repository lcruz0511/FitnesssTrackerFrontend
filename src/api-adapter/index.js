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


export async function registerUser(username, password, setToken){

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
    setToken(result.token)
    if (result.token){
        localStorage.removeItem("token");
        localStorage.setItem("token", result.token)
        localStorage.setItem("username", result.user.username)
      }
  })
  .catch(console.error);

 
}

export async function loginUser(username, password){
    console.log(username)
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
            console.log(result)
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

export async function addRoutine(name, goal, isPublic)  {
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
  })
  .catch(console.error);
}
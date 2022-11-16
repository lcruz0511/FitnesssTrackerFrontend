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
    console.log(result, "result from registration");
    setToken(result.token)
    console.log(result.token, 'result from result.token')
  })
  .catch(console.error);

  if (result.token){
    localStorage.removeItem("token");
    localStorage.setItem("token", token)
  }
}

export async function loginUser(username, password){
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
          console.log(result);
        })
        .catch(console.error);

        
            
            console.log(result.token, "result token")
            localStorage.setItem("token", result.token)
          
        
}

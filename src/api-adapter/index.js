// const baseUrl= "http://localhost:3000/api"
const baseUrl= "https://fitnesstrac-kr.herokuapp.com/api"

export async function getRoutines(token){
    const options = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    }
    const response = await fetch(`${baseUrl}/routines`, options);
    const result = await response.json();
    const routines = result.data.routines;
    return routines
};


// export async function registerUser(username, password){
//     const options ={
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json,"
//         },
//         body: JSON.stringify({
//             user: {
//                 username,
//                 password,
//             }
//         })
//     };
//     const response = await fetch(`${baseUrl}/users/register`, options)
//     const result = await response.json();

//     return result.data;
// }
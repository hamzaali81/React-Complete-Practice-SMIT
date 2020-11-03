// const UpdateUser = (user)=>{
//     return {
//         type: "UPDATE_USER",
//         user
//     }
// }
const UpdateUser = (user)=>{
    return (dispatch)=> { 
        
        fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => {
    return {
    type: "UPDATE_USER",
    user: json
    }
})
}
}

const RemoveUser = (user)=>{
    return {
        type: "REMOVE_USER",
        user: 'biryani'
    }
}

export {
    UpdateUser,
    RemoveUser
}
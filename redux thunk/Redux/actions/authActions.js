const updateUser = (user) => {
     return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
   dispatch({ 
    type: "UPDATE_USER",
    user: json
   })
        // return {
    //     type: "UPDATE_USER",
    //     user: json
    // }
    })
}
}
const removeUser  = (user) => {
    return {
        type: "REMOVE_USER",
        user
    }
}

export {
    updateUser,
    removeUser
}
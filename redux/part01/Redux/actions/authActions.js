const updateUser = (user) => {
    return {
        type: "UPDATE_USER",
        user
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
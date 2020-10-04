const UpdateUser = ()=>{
    return (dispatch) => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => dispatch({

              type: 'UPDATED_USER',
              payload: 'biryani parcel',
              parcel: 'Tika Booti',
              user: json
          })
          )
    }
}

const RemoveUser = ()=>{
    return {
        type: 'REMOVE_USER'
    }
}



export {
    UpdateUser,
    RemoveUser
}
const updateUser = (user)=>{
    return dispatch=>{

        fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => 
    // console.log(json)
        dispatch({
        type: 'UPDATE_USER',
        payload: 'biryani',
        user: json
       })
  )
    }
}

export default updateUser;
const updateUser = ()=>{
        return (dispatch)=>{
            dispatch({type: 'UPDATE_USER',
            payload: 'biryani'})
        }
}


export default updateUser;
// const updateUser = ()=>{
//     return{

//         type: 'UPDATE_USER',
//         payload: 'kesa diya'
//     }

// }

// export default updateUser;

// const setData = ()=>{
//     // console.log('Hello');
  
//     return (dispatch)=>{
//         console.log('hello');
//         // dispatch({
//             fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(json =>{ 
//           return { type:"UPDATE_USER",
//                 payload:'biryani',
//                 data: json
//             }
//                 // console.log(json))
//             })
            
//         // })
//     }
// }
// const setData = ()=>{
//  return (dispatch)=>{

//     //  console.log('hello');
    
      
//             fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json =>  
//              {
//               return {

//                   type: 'UPADATE_USER',
//                     payload: 'biryani',
//                     data: json
//               }  
//             })
//         }
//     }

// const setData=(user)=>{
//     return {
//         type: 'UPDATE_USER',
//         payload: 'biryani',
//         user
//     }
// }

const intialcounter= {
    counter: 0
};
const incrementCounter = ()=>{
    //  return (dispatch)=> {
    //   dispatch({
    //     type: 'INCREMENT',
    //     payload: {counter:1}
    //   })
    //  }
    // return (dispatch) =>{
  return (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => 
    // console.log(json)
        dispatch({
            type: 'INCREMENT',
            payload: ++intialcounter.counter,
            // mydata: json
        })
  )
    }
}
const apifetching =()=>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
      dispatch({
          type: 'FETCH_DATA',
          data: json
      })

  }
    // console.log(json)

    )

        // type: 'FETCH_DATA';
    }
}

// export {
//     setData
// }

export {
    incrementCounter,
    apifetching
}
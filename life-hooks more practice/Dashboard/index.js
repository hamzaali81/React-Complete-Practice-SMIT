import React, { Component } from 'react'

// Loader=()=>{
//     return(
//         <div>
//             <img src="./loader.gif" alt="loader"/>
//         </div>
//     )
// }

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            dasboard: this.props.text

        }       
    }


    // componentWillReceiveProps(nextProps){
    //     console.log('this.props.text********',this.props.text);
    //     console.log('nextProps text******',nextProps.text);     
    //     this.setState({
    //         dasboard: nextProps.text
    //     })
    // }


    componentDidMount(){
    
        setTimeout(()=>{
       console.log('Kar de');
        },2000)
    }
    

//     static getDerivedStateFromProps(props,state){
//         console.log(props,state.dasboard);
//         console.log('props','state');
//         console.log(this);
//         console.log('props.text',props.text);
//         console.log('state.text',state.dasboard);
//         if(props.text === state.dasboard){
// console.log('test you win');
// state.dasboard = 'karachi';
//     return {
//         status: 'you win'
//     }
//         } 

//        return null
         
//     }
shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate','nextProps','nextState');
console.log(nextProps,nextState);
return true
}

 getSnapshotBeforeUpdate(){
     return {
         status: 'keyboard'
     }
 }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('prevProps','prevState','snapshot');
        console.log(prevProps,prevState,snapshot,this.props.text);
    }

    render() {
        const {dasboard} = this.state;
        console.log('render');
        console.log('render');
        return (
            <div>
                {/* <Loader /> */}
                <h1>Ya State ka text hai----> {dasboard}</h1>
                <h1>Ya Props ka text hai----> {this.props.text}</h1>
                
            </div>
        )
    }
}

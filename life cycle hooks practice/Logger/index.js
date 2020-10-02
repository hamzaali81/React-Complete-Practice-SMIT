import React, { Component } from 'react'

export default class Logger extends Component {
    constructor(props){
        super(props)
this.state={
    dashboard: this.props.text,
    isShow: false,
    text: 'oye oye'

}   
 }

 componentWillMount(){
     console.log('componentWillMount****');
     fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))
 }
 componentDidMount(){
     console.log('componentDidMount****');
 }

 componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps props***",this.props.text);
    console.log("componentWillReceiveProps nextProps***",nextProps.text);
//    this.setState({
//        dashboard: this.props.text
//    })
   this.setState({
       dashboard: nextProps.text
   })

 }

 componentWillUpdate(nextProps,nextState){
    //  console.log('component props****',this.props.text);
    //  console.log('componentWillUpdate****',nextProps.text);
    //  console.log('componentWillUpdate****',this.state.text);
    //  console.log('componentWillUpdate****',nextState.text);
    console.log('componentWillUpdate this.state',this.state.isShow);
    console.log('componentWillUpdate nextState',nextState.isShow);
    console.log();

 }
 
 
 static getDerivedStateFromProps(props,state){
     // console.log('props','state');
     // console.log(props,state);
     // console.log('this****',this);
     return{
         text: 'oye hoye'
    }
 }
 
 shouldComponentUpdate(nextProps,nextState){
//      console.log("shouldComponentUpdate ******",nextState.text);
//     if(nextState.text === "hamza"){
//         return false
//     }
//     return false
return true;
}
getSnapshotBeforeUpdate(prevProps,prevState){
    if(this.state.text === 'hamza'){
    return{
        status: 'you win'
    }
}
return null;
}

 componentDidUpdate(prevProps,prevState,snapshot){
    console.log('snap*****',snapshot);
    // console.log('prevProps*****',prevProps);
    // console.log('this.props.text*****',this.props.text);
    
    // if(prevProps.text !== this.props.text){

    //     alert('Text change detect')
    // }
 }

componentWillUnmount(){
    console.log('componentWillUnmount');
}
    render() {
          const {dashboard,isShow,text }= this.state;
        //   console.log('****props',this.props);
        console.log('render chala de',text);
        //   console.log(props);
        return (
            <div>
                <h1>Ya State ka text hai---> {dashboard}</h1>
                <h1>Ya props ka text hai---> {this.props.text}</h1>

                <button onClick={()=>{this.setState({isShow: !isShow})}}>Toggle Me</button>
            </div>
        )
    }
}

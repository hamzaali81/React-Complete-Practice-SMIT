import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      dashboardtext: this.props.text,
      isShow: false
    }
    // console.log(props);

    }
    
    componentWillMount(){
      console.log('componentWillMount*****');
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    }
                
    
    componentWillReceiveProps(nextProps){
                   console.log('componentWillReceiveProps=>',this.props.text);
                   console.log('componentWillReceiveProps=>',nextProps.text);
                   this.setState({dashboardtext: nextProps.text})
                 }
  


componentWillUpdate(nextProps,nextState){
  // console.log('componentWillUpdate',this.props.text);
  // console.log('componentWillUpdate',nextProps);

  console.log('componentWillUpdate',this.state.isShow);
  console.log('componentWillUpdate',nextState.isShow);
}


  render() {
    const {dashboardtext,isShow}= this.state;
    // console.log(dashboardtext);
    console.log('render****');
    return (

      <div>
      <h1>Dashboard</h1>
      Ye state ka text hai --{dashboardtext} <br/>
      Ye props ka text hai --{this.props.text} 
      <button onClick={()=>{this.setState({isShow: !isShow})}}>Toggle</button>
      </div>
    );
  }

}
export default Dashboard;

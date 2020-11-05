import React, { Component } from 'react'
import { connect } from 'react-redux'
import updateUser from '../Redux/action';

class Judge extends Component {

    componentDidMount(){
        setTimeout(()=>{
            console.log('data api fetching');
           return this.props.updateUser()

        },1000)
    }

    componentWillReceiveProps(nextProps){
        console.log('nextProps',nextProps);
        var a=nextProps.userdata.slice(0,10).map((el)=>{
            console.log(el.title);
        return <li>{el.title}</li>        
        })
    }
    render() {
        console.log(this.props);
        // console.log(this.props);
        // console.log(this.props.updateUser());
        return (
            <div>
               Judge 
        <h1>{this.props.name}</h1>
        {/* <ul>
            {this.props.userdata.map((el)=>{
                return <li>{
                    el.map((item)=>{
                    return <li>{item.title}</li>
                    })
                    }</li>
            })}
        </ul> */}
            </div>
        )
    }
}
const mapStateToProps= (state)=>{
    console.log(state);
    return {
        userdata: state.data
    }
}

const mapDispatchToProps = (dispatch)=>({   
        updateUser: ()=>dispatch(updateUser())
})
export default connect(mapStateToProps,mapDispatchToProps)(Judge);
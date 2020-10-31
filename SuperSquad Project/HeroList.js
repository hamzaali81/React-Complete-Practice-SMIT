import React, { Component } from 'react'
import { connect } from 'react-redux'

class HeroList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Your Hero Squad</h1>
                <ul>
                    {
                        this.props.heroes.map((hero)=>{
                            return (
                            <li key={hero.id} className="list-group-item">
                                <div  className="list-item">
                                    {hero.name}
                                </div>
                            </li>
                            )
                            
                    
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        heroes: state.heroes
    }

}

export default connect(mapStateToProps,null)(HeroList);
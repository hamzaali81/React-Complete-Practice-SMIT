import React, { Component } from 'react'
import { connect } from 'react-redux'
import characters from './reducers/character_reducer';
import { bindActionCreators } from 'redux'
import { addCharacterByID } from './actions'
import './style/index.css'

class CharacterList extends Component {
    render() {
        console.log('this.props',this.props);
        return (
            <div>
                <h4>Characters</h4>
                <ul className="list-group">
                    {this.props.characters.map(character=>{
                        return <li key={character.id} className="list-group-item">
                            <div className="list-item">{character.name}</div>
                            <div className="list-item right-button" onClick={()=>{this.props.addCharacterByID(character.id)}}>
                                +
                            </div>
                        </li>
                    })}
                </ul>
        
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log(state);
    return{
        characters: state.characters
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addCharacterByID},dispatch)

// }


// export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);
export default connect(mapStateToProps, {addCharacterByID})(CharacterList);
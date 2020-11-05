import React, { createContext } from 'react';
import {mainComponent,subComponent} from './App';


export default function Child1() {

    return (
        <mainComponent.Consumer>{(UserInitialvalue)=>{
            return (
              <subComponent.Consumer>
                           {(secondValue)=>{
                               return <div>
                                 <h1>Child 1</h1>
                                       </div>
                           }}
              </subComponent.Consumer>
              
            )
            }}


        </mainComponent.Consumer>
    )
}

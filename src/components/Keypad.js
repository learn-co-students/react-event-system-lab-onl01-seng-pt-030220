// Code Keypad Component Here
import React,{Component} from 'react'
export default class Keypad extends Component {
   

     constructor(type){
          super()
         this.state={
             input:  type
        
         }
     }

   handleClick=()=>{
      
     console.log('Entering password...')

   }
    render() {

     return <input type="password" onKeyUp={this.handleClick}  /> 

    }
}
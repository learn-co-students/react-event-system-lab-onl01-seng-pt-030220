// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {



  render() {
    return(

      <input onKeyUp={(e) => {console.log('Entering password...')}}type="password"></input>
    )
  }
}

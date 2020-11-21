// Code EyesOnMe Component Here
import React from 'react'
export default class EyesOnMe extends React.Component {
  handleOnBlur = () => {return console.log('Hey! Eyes on me!')}
  handleOnFocus = () => {return console.log('Good!')}
  
  render = () => {
    return <button onBlur = {this.handleOnBlur} onFocus = {this.handleOnFocus}/>
}
}
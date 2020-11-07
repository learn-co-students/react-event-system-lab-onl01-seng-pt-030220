// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component{

    focusevent = () =>{
        console.log("Good!")
    }

    blurEvent = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return <button onFocus={this.focusevent} onBlur={this.blurEvent}></button>
    }
}
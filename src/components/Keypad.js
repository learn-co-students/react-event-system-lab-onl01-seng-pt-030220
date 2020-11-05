import React, { Component } from 'react';

class Keypad extends Component {
    keyUpHandler = (event) => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.keyUpHandler} type="password"></input> 
            </div>
        );
    }
}

export default Keypad;
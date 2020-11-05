import React, { Component } from 'react';

class EyesOnMe extends Component {
    look = () => {
        console.log("Good!")
    }

    dontLook = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <div>
                <button onFocus={this.look} onBlur={this.dontLook}></button>
            </div>
        );
    }
}

export default EyesOnMe;
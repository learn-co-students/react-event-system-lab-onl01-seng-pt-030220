// Code EyesOnMe Component Here

import React from 'react'


class EyesOnMe extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    handleFocus = () => {
        console.log('Good!')
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Button</button>
            </div>
        )
    }
}

export default EyesOnMe

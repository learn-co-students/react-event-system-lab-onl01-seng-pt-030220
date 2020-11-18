// Code Keypad Component Here
import React from 'react'
import { render } from 'enzyme'



class Keypad extends React.Component {
    constructor() {
        super()
        // this.state = {}
    }
        handleKeyUp = () => {
            console.log('Entering password...')
        }

    render() {
        return (
            <div>
                <input onKeyUp={this.handleKeyUp} type="password" />
            </div>
        )
    }
}
    export default Keypad



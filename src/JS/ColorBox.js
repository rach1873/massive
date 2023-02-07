import React, { Component } from 'react'
import '../CSS/ColorBox.css'

class ColorBox extends Component {

    render() {
        return (
            <div style={{ background: this.props.background }} className='ColorBox'>
                <span>{this.props.name}</span>
                <p className='Copy'>COPY</p>
                <p className='More'>MORE</p>
            </div>
        )
    }
}

export default ColorBox
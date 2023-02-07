import React, { Component } from 'react'
import '../CSS/ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {

    render() {
        return (
            <CopyToClipboard text='hello'>
                <div style={{ background: this.props.background }} className='ColorBox'>
                    <span>{this.props.name}</span>
                    <p className='Copy'>COPY</p>
                    <p className='More'>MORE</p>
                </div>
            </CopyToClipboard>


        )
    }
}





export default ColorBox

import React, { Component } from 'react'
import ColorBox from './ColorBox'
import '../CSS/Palette.css'
import { generatePalette } from '../colorsHelpers'
import { colorsArray } from './SeedColors'

class Palette extends Component {

    render() {
        const colorBoxes = this.props.colors.map(color => <ColorBox background={color.color} name={color.name} />)

        console.log(generatePalette(colorsArray[4]))
        return (
            <div className='Palette'>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette
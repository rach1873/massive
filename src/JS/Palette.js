import React, { Component } from 'react'
import ColorBox from './ColorBox'
import '../CSS/Palette.css'
import { generatePalette } from '../colorsHelpers'
import { colorsArray } from './SeedColors'
import Navbar from './Navbar'


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({
            level: level
        })

        console.log(level)
    }

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color => <ColorBox background={color.hex} name={color.id} />)


        return (
            <div className='Palette'>
                <Navbar level={this.state.level} changeLevel={this.changeLevel} />
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette
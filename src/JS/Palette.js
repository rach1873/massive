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
            level: 500,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({
            level: level,
            format: "hex"
        })


    }

    changeFormat(evt) {
        this.setState({
            format: evt
        })


    }

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color => <ColorBox background={color[this.state.format]} name={color.id} />)


        return (
            <div className='Palette'>
                <Navbar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette
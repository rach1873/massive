import React, { Component } from 'react'
import ColorBox from './ColorBox'
import '../CSS/Palette.css'
import { generatePalette } from '../colorsHelpers'
import { colorsArray } from './SeedColors'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

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
                <Slider defaultValue={this.state.level} min={100} max={900} step={100} onAfterChange={this.changeLevel} />
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette
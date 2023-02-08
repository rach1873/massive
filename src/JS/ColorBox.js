import React, { Component } from 'react'
import '../CSS/ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false }
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }

    render() {
        return (
            <CopyToClipboard text={this.props.background} onCopy={this.changeCopyState}>
                <div style={{ background: this.props.background }} className='ColorBox'>
                    <div style={{ background: this.props.background }} className={`copy-overlay ${this.state.copied && "show"}`}></div>
                    <div className={`copy-msg ${this.state.copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p>{this.props.background}</p>
                    </div>
                    <span>{this.props.name}</span>
                    <p className='Copy'>COPY</p>
                    <p className='More'>MORE</p>
                </div>
            </CopyToClipboard>


        )
    }
}





export default ColorBox

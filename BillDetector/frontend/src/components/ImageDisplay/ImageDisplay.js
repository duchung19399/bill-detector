import React, { Component } from 'react'

export default class ImageDisplay extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="image-frame" style={Styles.imageFrame}>
                <img style={Styles.imageDisplay} src={this.props.src} alt={this.props.alt} />
            </div>
        )
    }
}

const Styles = {
    imageFrame: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        padding: '10px',
    },
    
    imageDisplay: {
        display: 'block',
        width: '100%',
        height: 'auto',
        margin: 'auto',
    },
}
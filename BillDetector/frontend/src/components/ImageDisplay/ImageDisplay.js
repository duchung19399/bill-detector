import React, { Component } from 'react'

export default class ImageDisplay extends Component {

    constructor(props) {
        super(props)
        this.src = props.src
    }

    render() {
        return(
            <div style={Styles.imageFrame}>
                <img style={Styles.imageDisplay} src={this.src} />
            </div>
        )
    }
}

const Styles = {
    imageFrame: {
    },
    
    imageDisplay: {
        display: 'block',
        width: '90%',
        height: '90%',
        marginHorizontal: 'auto',
    },
}
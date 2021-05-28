import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ImageDisplay from '../ImageDisplay/ImageDisplay'

let _url = "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"

export default class ImagesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedImages: [],
        }
        this.addImages = this.addImages.bind(this)
        this.clearImages = this.clearImages.bind(this)
    }

    componentDidUpdate() {
        console.log("state: ", this.state)
    }

    addImages(e) {
        let images_array = Array.from(e.target.files).map(
            (file) => URL.createObjectURL(file)
        )
        this.setState({
            selectedImages: images_array,
        })
    }

    clearImages() {
        this.setState({
            selectedImages: [],
        })
    }

    render() {
        return(
            <div className="main-frame">
                <div className="header">
                    <label>
                        Images Gallery
                    </label>
                </div>
                <div className="body">
                    <Grid container spacing={1}>
                        {
                            this.state.selectedImages.map(
                                (item, index) => (
                                    <Grid key={index} item xs={3} align='center'>
                                        <ImageDisplay src={item} />
                                    </Grid>
                                )
                            )
                        }
                    </Grid>
                </div>
                <div className="footer">
                    <Grid container spacing={1}>
                        <Grid item xs={6} align='center'>
                            <div className="button">
                                <input
                                    style={Styles.input}
                                    accept="image/*"
                                    id="file"
                                    type="file"
                                    multiple
                                    onChange={this.addImages}
                                />
                                <label htmlFor="file">Add Images</label>
                            </div>
                        </Grid>
                        <Grid item xs={6} align='center'>
                            <div className="button" onClick={this.clearImages}>
                                <label>Clear Images</label>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

const Styles = {    
    input: {
        display: 'none',
    }
}
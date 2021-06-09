import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ImageContext from '../../contexts/ImageContext'

let _url = "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
let active = 'rgba(151, 12, 18, 1)'
let passive = 'rgba(151, 12, 18, 0.2)'

export default class ImagesList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ImageContext.Consumer>
                {context => 
                    <div className="main-frame">
                        <div className="header">
                            <label>
                                Images
                            </label>
                        </div>
                        <div className="body">
                            <Grid container spacing={2}>
                                {
                                    context.images.map(
                                        (item, index) => (
                                            <Grid key={index} item xs={3} align='center' style={Styles.gridItem}>
                                                <div className="image-frame" style={{ ...Styles.imageFrame,}}
                                                    // backgroundColor: context.state.isChosen === 1 ? active : passive}}
                                                    onClick={context.update}
                                                >
                                                    <img style={Styles.imageDisplay} src={item} alt={context.names[index]}/>
                                                </div>
                                            </Grid>
                                        )
                                    )
                                }
                            </Grid>
                        </div>
                        <div className="footer">
                            <Grid container spacing={1}>
                                <Grid className="grid-item" item xs={3} align='center' style={Styles.gridItem}>
                                    <div className="button">
                                        <input
                                            style={Styles.input}
                                            accept="image/*"
                                            id="file"
                                            type="file"
                                            multiple
                                            onChange={context.add}
                                        />
                                        <label htmlFor="file">Add Images</label>
                                    </div>
                                </Grid>
                                <Grid item xs={3} align='center' style={Styles.gridItem}>
                                    <div className="button" onClick={context.clear}>
                                        <label>Remove Images</label>
                                    </div>
                                </Grid>
                                <Grid item xs={3} align='center' style={Styles.gridItem}>
                                    <div className="button" onClick={context.upload}>
                                        <label>Remove All</label>
                                    </div>
                                </Grid>
                                <Grid item xs={3} align='center' style={Styles.gridItem}>
                                    <div className="button" onClick={context.upload}>
                                        <label>Upload Images</label>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
            } 
            </ImageContext.Consumer>
        )
    }
}

const Styles = {    
    input: {
        display: 'none',
    },

    gridItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

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
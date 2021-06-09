import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ImageContext from '../../contexts/ImageContext'

let active = '#96863f'
let passive = 'rgba(178, 171, 140, 0.35)'

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
                                                <div className="image-frame" style={{ ...Styles.imageFrame,
                                                    backgroundColor: context.chosenImages.indexOf(context.names[index]) !== -1 ? active : passive}}
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
                                <Grid className="grid-item" item xs={2} align='center' style={Styles.gridItem}>
                                    <div className="button" data-tip="Add Images">
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
                                <Grid item xs={2} align='center' style={Styles.gridItem}>
                                    <div className="button" data-tip="Upload Images" onClick={context.upload}>
                                        <label>Upload Images</label>
                                    </div>
                                </Grid>
                                <Grid item xs={2} align='center' style={{ ...Styles.gridItem, fontWeight: '600'}}>
                                    Ticks: {context.chosenImages.length}
                                </Grid>
                                <Grid item xs={2} align='center' style={Styles.gridItem}>
                                    <div className="button" data-tip="Remove Ticks" onClick={context.removeTicks}>
                                        <label>Remove Ticks</label>
                                    </div>
                                </Grid>
                                <Grid item xs={2} align='center' style={Styles.gridItem}>
                                    <div className="button" data-tip="Remove Images" onClick={context.removeImages}>
                                        <label>Remove Images</label>
                                    </div>
                                </Grid>
                                <Grid item xs={2} align='center' style={Styles.gridItem}>
                                    <div className="button" data-tip="Remove All" onClick={context.removeAllImg}>
                                        <label>Remove All</label>
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
        padding: '12px',
        borderRadius: '8px'
    },
    
    imageDisplay: {
        display: 'block',
        width: '100%',
        height: 'auto',
        margin: 'auto',
    },
}
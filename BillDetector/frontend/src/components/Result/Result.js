import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import ImageDisplay from '../ImageDisplay/ImageDisplay'
import ImageContext from '../../contexts/ImageContext'

export default class Result extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        return(
            <ImageContext.Consumer>
                {context => 
                    <div className="side-frame">
                        <div className="header" style={Styles.headerLabel}>
                            <label>Image Information</label>
                        </div>
                        <div className="body">
                            <div className="label-name">
                                <label>Model Name</label>
                            </div>
                            <ImageDisplay src={context.src} />
                                
                            <div className="label-name">{context.name}</div>
                            <Grid style={Styles.resultFrame} container spacing={1}>
                                <Grid item xs={5} align='right'>
                                    <label style={Styles.item}>feature</label>
                                </Grid>
                                <Grid item xs={2} align='center'>
                                    <label style={Styles.item}>:</label>
                                </Grid>
                                <Grid item xs={5} align='left'>
                                    <label style={Styles.item}>weight</label>
                                </Grid>
                                <Grid item xs={5} align='right'>
                                    <label style={Styles.item}>feature</label>
                                </Grid>
                                <Grid item xs={2} align='center'>
                                    <label style={Styles.item}>:</label>
                                </Grid>
                                <Grid item xs={5} align='left'>
                                    <label style={Styles.item}>weight</label>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="footer">
                            <Grid container spacing={1}>
                                <Grid item xs={12} align='center' style={Styles.gridItem}>
                                    <div className="button" data-tip="Save Result">
                                        <label>Save Result</label>
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
    headerLabel: {
        align: 'center',
    },

    resultFrame: {
        marginTop: '20px'
    },

    gridItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    item: {
        fontSize: '15px',
    }
}
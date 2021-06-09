import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import ImageDisplay from '../ImageDisplay/ImageDisplay'
import ImageContext from '../../contexts/ImageContext'

let _url = "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"

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
                            <label>
                                Image Information
                            </label>
                        </div>
                        <div className="body">
                            <div className="label-name">Tên Model</div>
                                <ImageDisplay src={context.src} />
                                
                            <div className="label-name">{context.name}</div>
                            <Grid style={Styles.resultFrame} container spacing={1}>
                                <Grid item xs={5} align='right'>feature</Grid>
                                <Grid item xs={2} align='center'>:</Grid>
                                <Grid item xs={5} align='left'>weight</Grid>
                                <Grid item xs={5} align='right'>feature</Grid>
                                <Grid item xs={2} align='center'>:</Grid>
                                <Grid item xs={5} align='left'>weight</Grid>
                            </Grid>
                        </div>
                        <div className="footer">
                            <Grid container spacing={1}>
                                <Grid item xs={12} align='center' style={Styles.gridItem}>
                                    <div className="button">
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
    }
}
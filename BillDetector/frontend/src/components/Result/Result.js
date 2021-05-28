import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import ImageDisplay from '../ImageDisplay/ImageDisplay'

let _url = "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"

export default class Result extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="side-frame">
                <div className="header" style={Styles.headerLabel}>
                    <label>
                        Result
                    </label>
                </div>
                <div className="body">
                    <ImageDisplay src={_url} />
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
                        <Grid item xs={12} align='center'>
                            <div className="button">
                                <label>Export Model</label>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

const Styles = {
    headerLabel: {
        align: 'center',
    },

    resultFrame: {
        marginTop: '20px'
    }
}
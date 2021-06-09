import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ImageDisplay from '../ImageDisplay/ImageDisplay'

let _url = "https://www.w3schools.com/w3images/lights.jpg"

export default class CreateModel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            features: ['Epoch', 'Learning Rate'],
            weights: ['1', '1']
        }
        this.addFeature = this.addFeature.bind(this)
        this.clearFeature = this.clearFeature.bind(this)
    }

    addFeature() {
        this.setState({
            features: this.state.features.concat('feature'),
            weights: this.state.weights.concat('weight') 
        })
    }

    clearFeature() {
        this.state.features.pop()
        this.state.weights.pop()
        this.setState({
            features: this.state.features,
            weights: this.state.weights
        })
    }

    render() {
        return(
            <div className="side-frame">
                <div className="header">
                    <label>
                        Model Infomation
                    </label>
                </div>
                <div className="body">
                    <div className="label-name">Tên Model</div>
                    <ImageDisplay src={_url} />
                    <div className="label-name">Tên ảnh</div>
                    <Grid style={Styles.resultFrame} container spacing={1}>
                        {
                            this.state.features.map((value, index) => (
                                <Grid
                                    key={index}
                                    item
                                    xs={12}
                                    align='center'
                                    style={{display: 'flex'}}
                                >
                                    <Grid item xs={5} align='left' style={{ paddingLeft: '50px'}}>
                                        {/* <input style={Styles.feature} type="text" placeholder={value}/> */}
                                        <label>{value}</label>
                                    </Grid>
                                    <Grid item xs={2} align='center'>:</Grid>
                                    <Grid item xs={5} align='left'>
                                        <input style={Styles.feature} type="text" placeholder={this.state.weights[index]}/>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                    {/* <Grid style={Styles.featureGroup} container spacing={1}>
                        <Grid item xs={6} align='center'>
                            <div className="button" onClick={this.addFeature}>
                                New feature
                            </div>
                        </Grid>
                        <Grid item xs={6} align='center'>
                            <div className="button" onClick={this.clearFeature}>
                                Clear feature
                            </div>
                        </Grid>
                    </Grid> */}
                </div>
                <div className="footer">
                    <Grid container spacing={1}>
                        <Grid item xs={6} align='center' style={Styles.gridItem}>
                            <div className="button">
                                <label>Run Model</label>
                            </div>
                        </Grid>
                        <Grid item xs={6} align='center' style={Styles.gridItem}>
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
    runModel: {
        position: 'absolute',
        width: '50%',
        left: 0,
        bottom: 0,
    },

    featureGroup: {
        marginTop: '20px',
    },

    feature: {
        width: '80%',
        marginHorizontal: 10,
    },

    gridItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    exportModel: {
        position: 'absolute',
        width: '50%',
        right: 0,
        bottom: 0,
    },
    
    resultFrame: {
        marginTop: '30px'
    }
}
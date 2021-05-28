import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ImageDisplay from '../ImageDisplay/ImageDisplay'

let _url = "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"

export default class CreateModel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            features: ['feature1', 'feature2'],
            weights: ['weight1', 'weight2']
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
                        Create Model
                    </label>
                </div>
                <div className="body">
                    <ImageDisplay src={_url} />
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
                                    <Grid item xs={5} align='right'>
                                        <input style={Styles.feature} type="text" placeholder={value}/>
                                    </Grid>
                                    <Grid item xs={2} align='center'>:</Grid>
                                    <Grid item xs={5} align='left'>
                                        <input style={Styles.feature} type="text" placeholder={this.state.weights[index]}/>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid style={Styles.featureGroup} container spacing={1}>
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
                    </Grid>
                </div>
                <div className="footer">
                    <Grid container spacing={1}>
                        <Grid item xs={6} align='center'>
                            <div className="button">
                                <label>Run Model</label>
                            </div>
                        </Grid>
                        <Grid item xs={6} align='center'>
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
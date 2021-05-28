import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import CreateModel from './CreateModel/CreateModel'
import ImagesList from './ImagesList/ImagesList'
import Result from './Result/Result'

export default class App extends Component {

    render() {
        return (
            <div className="main-ui">
                <CreateModel />
                <ImagesList />
                <Result />
            </div>
        )
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)
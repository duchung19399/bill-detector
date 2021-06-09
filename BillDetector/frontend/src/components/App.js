import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import Navbar from './Navigation/Navbar'
import CreateModel from './CreateModel/CreateModel'
import ImagesList from './ImagesList/ImagesList'
import Result from './Result/Result'
import ImageProvider from './Provider/ImageProvider'
import ModelProvider from './Provider/ModelProvider'

export default class App extends Component {

    render() {
        return (
                <div>
                    <ModelProvider>
                        <Navbar />
                        <div className="main-ui">
                            <ImageProvider>
                                <CreateModel />
                                <ImagesList />
                                <Result />
                            </ImageProvider>
                        </div>
                    </ModelProvider>
                </div>
        )
    }
}

const appDiv = document.getElementById("app")
render(<App />, appDiv)
import React, { Component } from 'react'
import ImageContext from '../../contexts/ImageContext'

export default class ImageProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            srcList: [],
            nameList: [],
            chosenImages: [],
            current_src: "https://www.w3schools.com/w3images/lights.jpg",
            current_name: "Example.png"
        }

        this.addImages = this.addImages.bind(this)
        this.clearImages = this.clearImages.bind(this)
        this.updateImage = this.updateImage.bind(this)
    }

    addImages(e) {
        let current_files = e.target.files
        let _srclist = Array.from(current_files).map(
            (file) => URL.createObjectURL(file)
        )
        let _namelist = Array.from(current_files).map(
            (file) => file.name
        )

        this.setState({
            srcList: _srclist,
            nameList: _namelist
        })
    }

    clearImages() {
        this.setState({
            srcList: [],
            nameList: [],
            chosenImages: [],
        })
    }

    updateImage(e) {
        let me = e.target
        let _chosenImages = this.state.chosenImages
        let index = _chosenImages.indexOf(me.alt)
        if (me.src !== undefined) {
            if (index === -1) {
                console.log(_chosenImages, me.alt)
                _chosenImages.concat(me.alt)
            }
            else
                _chosenImages.splice(index, 1)
            this.setState({
                current_src: me.src,
                current_name: me.alt,
                chosenImages: _chosenImages
            })
        }
        // console.log(index, _chosenImages);
    }

    render() {
        return(
            <ImageContext.Provider value={{
                images: this.state.srcList,
                names: this.state.nameList,
                chosenImages: this.state.chosenImages,
                src: this.state.current_src,
                name:this.state.current_name,
                update: this.updateImage,
                add: this.addImages,
                clear: this.clearImages
            }}>
                {this.props.children}
            </ImageContext.Provider>
        )
    }
}
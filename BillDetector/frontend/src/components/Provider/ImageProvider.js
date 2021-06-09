import React, { Component } from 'react'
import ImageContext from '../../contexts/ImageContext'

export default class ImageProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            srcList: [],
            nameList: [],
            chosenImages: [],
            current_src: "https://cdn2.iconfinder.com/data/icons/document-34/200/358-512.png",
            current_name: "Example.png"
        }

        this.addImages = this.addImages.bind(this)
        this.removeImages = this.removeImages.bind(this)
        this.updateImage = this.updateImage.bind(this)
        this.removeTicks = this.removeTicks.bind(this)
        this.removeAllImg = this.removeAllImg.bind(this)
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

    removeImages() {
        this.setState({
            srcList: [],
            nameList: [],
            chosenImages: [],
            current_src: "https://cdn2.iconfinder.com/data/icons/document-34/200/358-512.png",
            current_name: "Example.png"
        })
    }

    updateImage(e) {
        let me = e.target
        let _chosenImages = this.state.chosenImages
        let index = _chosenImages.indexOf(me.alt)
        if (me.src !== undefined) {
            if (index === -1) {
                _chosenImages.push(me.alt)
            }
            else
                _chosenImages.splice(index, 1)
            this.setState({
                current_src: me.src,
                current_name: me.alt,
                chosenImages: _chosenImages
            })
        }
    }

    removeTicks() {
        this.setState({
            chosenImages: [],
            current_src: "https://cdn2.iconfinder.com/data/icons/document-34/200/358-512.png",
            current_name: "Example.png"
        })
    }

    removeAllImg() {
        this.setState({
            srcList: [],
            nameList: [],
            chosenImages: [],
            current_src: "https://cdn2.iconfinder.com/data/icons/document-34/200/358-512.png",
            current_name: "Example.png"
        })
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
                removeImages: this.removeImages,
                removeTicks: this.removeTicks,
                removeAllImg: this.removeAllImg
            }}>
                {this.props.children}
            </ImageContext.Provider>
        )
    }
}
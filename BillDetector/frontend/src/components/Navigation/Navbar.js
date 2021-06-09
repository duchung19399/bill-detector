import React, { Component } from 'react'
import { MenuItems } from './MenuItems'

export default class Navbar extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
        }
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <label>Bill Detector</label>
                </h1>
                <ul className="nav-menu">
                    <li style={{alignSelf: 'center'}}>
                        <a className={MenuItems[1].cName} href={MenuItems[1].url}>
                            <label>{MenuItems[1].title}</label>
                        </a>
                    </li>
                    <li style={{alignSelf: 'center'}}>
                        <a style={{ display:'flex' }} href={MenuItems[2].url}>
                            <select className={MenuItems[2].cName} style={Styles.selectForm}>
                                <option>Model 1</option>
                                <option>Model 2</option>
                                <option>Model 3</option>
                            </select>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

const Styles = {
    selectForm: {
        width: '100%',
        height: '100%',
        fontSize: '1.2rem'
    }
}
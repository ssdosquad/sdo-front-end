import React, { Component } from 'react'
import classes from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <div className={classes.Header}>
                <p className={classes.fullNamePar}>Вы вошли как: <span>Александра Козина Александровна, 7Б Лицей</span></p>
            </div>
        )
    }
}

export default Header
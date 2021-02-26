import React, { Component } from 'react'
import classes from './Panel.module.css'
import Menu from '../../components/menu/menu'

class Panel extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <div className={classes.Panel}>
                    <h1>dad</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default Panel
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import './testSelection.css'

class testSelection extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="testSelection">
                    <Header
                        name={this.props.name}
                        group={this.props.group}
                    />
                    <div className="testSelectionContent">
                    <div className="testSelectionItem">
                        <NavLink to="/test">
                            <p>Название предмета: <span>Математика</span></p>
                            <p>Название теста: <span>Уравнение</span></p>
                            <p>Время на выполнение: <span>45 минут</span></p>
                        </NavLink>
                        </div>
                        <div className="testSelectionItem">
                        <NavLink to="/test">
                            <p>Название предмета: <span>Математика</span></p>
                            <p>Название теста: <span>Уравнение</span></p>
                            <p>Время на выполнение: <span>45 минут</span></p>
                        </NavLink>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        group: state.group
    }
}

export default connect(mapStateToProps)(testSelection)
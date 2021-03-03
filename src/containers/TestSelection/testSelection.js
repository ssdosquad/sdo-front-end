import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './testSelection.css'
import Loader from '../../components/Loader/Loader'
import { nanoid } from 'nanoid'

class testSelection extends Component {

    state = {
        name: '',
        group: '',
        loading: false,
        tests: [
            {
                subjectName: 'Математика',
                testName: 'Уравнение',
                timeToComplete: '10'
            },
            {
                subjectName: 'Математика',
                testName: 'Уравнение',
                timeToComplete: '10'
            }
        ],
    }
    render() {
        return (
            <React.Fragment>
                <div className="testSelection">
                    <Header
                        name={this.state.name}
                        group={this.state.group}
                    />
                    <div className="testSelectionContent">
                        {
                            this.state.loading
                            ? <Loader />
                            :   this.state.tests.map((quiz, index) => {
                                    return (
                                        <div className="testSelectionItem" key={nanoid()}>
                                            <Link to="/test" key={nanoid()}>
                                                <p key={nanoid()}>Название предмета: <span className='spanInfo' key={nanoid()}>{quiz.subjectName}</span></p>
                                                <p key={nanoid()}>Название теста: <span className='spanInfo' key={nanoid()}>{quiz.testName}</span></p>
                                                <p key={nanoid()}>Время на выполнение: <span className='spanInfo' key={nanoid()}><span id='time' key={nanoid()}>{quiz.timeToComplete}</span> минут</span></p>
                                            </Link>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default testSelection
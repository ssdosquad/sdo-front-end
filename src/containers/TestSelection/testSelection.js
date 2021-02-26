import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './testSelection.css'
import Loader from '../../components/Loader/Loader'

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
                                        <div className="testSelectionItem" key={index++}>
                                            <Link to="/test" key={index++}>
                                                <p key={index++}>Название предмета: <span className='spanInfo' key={index++}>{quiz.subjectName}</span></p>
                                                <p key={index++}>Название теста: <span className='spanInfo' key={index++}>{quiz.testName}</span></p>
                                                <p key={index++}>Время на выполнение: <span className='spanInfo' key={index++}><span id='time' key={index++}>{quiz.timeToComplete}</span> минут</span></p>
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
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './testSelection.css'
import Loader from '../../components/Loader/Loader'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'

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

    componentDidMount() {
        document.title = 'Выбор теста';
    }

    render() {
        return (
            <React.Fragment>
                <div className="testSelection">
                    <Header
                        name={this.props.name}
                        group={this.props.group}
                    />
                    <div className="testSelectionContent">
                        {
                            this.state.loading
                            ? <React.Fragment>
                                <h1 style={{margin: 'auto', marginBottom: '20px'}}>Подождите загрузку</h1>
                                <Loader />
                            </React.Fragment>
                            :   this.state.tests.map((quiz) => {
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

function mapStateToProps(state) {
    return {
        name: state.student.name,
        group: state.student.group
    }
}

export default connect(mapStateToProps)(testSelection)
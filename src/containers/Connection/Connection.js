import React, { Component } from 'react'
import Menu from '../../components/menu/menu'
import './Connection.css'

class Connection extends Component {
    state = {
        students: [
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            },
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            },
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            },
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            },
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            },
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            },
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            },
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            },
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            },
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            },
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            },
            {
                status: 'Подтвержден',
                fullName: 'Алиса Зайцева Владимировна',
                class: '7Б',
                result: 'проходит тестирование',
                lastresult: 'Результат последнего теста'
            }
        ]
    }
    render() {

        const stateNull = () => {
            this.setState({
                students: []
            })
        }

        return (
            <React.Fragment>
                <Menu/>
                <div className="Connection">
                    <h1 className="home">Устройства</h1>
                    <div className="control">
                        <button className="compound">Обновить соединение</button>
                        <button className="compound" onClick={stateNull}>Обнулить соединение</button>
                        <p>
                            Показать по классу:
                            <select>
                                <option> Показывать все классы </option>
                            </select>
                        </p>
                    </div>
                    <div className="container">
                        {
                            this.state.students.length === 0
                            ? <h1 className="noCon">Нет соединений</h1>
                            : this.state.students.map((students, index) => {
                                return (
                                    <div className="item" key={index++}>
                                        <button className="confirmed" key={index++}>{students.status}</button>
                                        <div style={{margin: "auto"}} key={index++}>
                                            <p key={index++}>ФИО: <span className="fullName" key={index++}>{students.fullName}</span>, класс: <span className="class" key={index++}>{students.class}</span></p>
                                            <p key={index++}>Результат: <span className="result" key={index++}>{students.result}</span></p>
                                            <p key={index++}>{students.lastresult}</p>
                                        </div>
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

export default Connection
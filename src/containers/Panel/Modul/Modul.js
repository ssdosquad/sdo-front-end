import React, { Component } from 'react'
import Menu from '../../../components/menu/menu'
import './Modul.css'
import img from "../../../components/menu/dvr-24px.svg"

class Modul extends Component {
    state = {
        nameModule: 'Уравнения',
        numberQuestions: '36',
        questions: [
            {
                numberQuestions: '1',
                varQuestion: '1',
                imgQuestion: img,
                textQuestion: 'Решите уравнение . 3.1',
                answer1: 'A) 12;',
                answer2: 'B) 50;',
                answer3: 'C) 40;',
                answer4: 'D) 18;',
                correctAnswer: 'A) 12;'

            },
            {
                numberQuestions: '1',
                varQuestion: '1',
                imgQuestion: null,
                textQuestion: 'Решите уравнение . 3.1',
                answer1: 'A) 12;',
                answer2: 'B) 50;',
                answer3: 'C) 40;',
                answer4: 'D) 18;',
                correctAnswer: 'A) 12;'

            },
            {
                numberQuestions: '1',
                varQuestion: '1',
                imgQuestion: null,
                textQuestion: 'Решите уравнение . 3.1',
                answer1: 'A) 12;',
                answer2: 'B) 50;',
                answer3: 'C) 40;',
                answer4: 'D) 18;',
                correctAnswer: 'A) 12;'

            },
            {
                numberQuestions: '1',
                varQuestion: '1',
                imgQuestion: null,
                textQuestion: 'Решите уравнение . 3.1',
                answer1: 'A) 12;',
                answer2: 'B) 50;',
                answer3: 'C) 40;',
                answer4: 'D) 18;',
                correctAnswer: 'A) 12;'

            },
            {
                numberQuestions: '1',
                varQuestion: '1',
                imgQuestion: null,
                textQuestion: 'Решите уравнение . 3.1',
                answer1: 'A) 12;',
                answer2: 'B) 50;',
                answer3: 'C) 40;',
                answer4: 'D) 18;',
                correctAnswer: 'A) 12;'

            },
            {
                numberQuestions: '1',
                varQuestion: '1',
                imgQuestion: null,
                textQuestion: 'Решите уравнение . 3.1',
                answer1: 'A) 12;',
                answer2: 'B) 50;',
                answer3: 'C) 40;',
                answer4: 'D) 18;',
                correctAnswer: 'A) 12;'

            },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <div className="Module">
                    <h1 className="home">Выбор модуля</h1>
                    <div className="selectMod">
                        <div className="class-select">
                            <p>Выбрать класс для тестирования</p>
                            <select>
                                <option>--Класс--</option>
                            </select>
                        </div>
                        <div className="thing-select">
                            <p>Выберите предмет</p>
                            <select>
                                <option>--Предмет--</option>
                            </select>
                        </div>
                        <div className="module-select">
                            <p>Выберите модуль</p>
                            <select>
                                <option>--Модуль--</option>
                            </select>
                        </div>
                    </div>
                    <hr/>
                    <div className="content">
                        <p>Название модуля: {this.state.nameModule}</p>
                        <p>Кол-во вопросов: {this.state.numberQuestions}</p>
                        <hr/>
                        {
                            this.state.questions.map((question, index) => {
                                return (
                                    <div className="item" key={index++}>
                                        <p style={{textAlign: 'center'}} key={index++}>Задание №{question.numberQuestions} Вариант {question.varQuestion}</p>
                                        <button className="changeQuestion">Изменить вопрос</button>
                                        <p key={index++}>{question.textQuestion}</p>
                                        {
                                            question.imgQuestion != null
                                            ? <img src={question.imgQuestion} alt="" key={index++}/>
                                            : null
                                        }
                                        <p>Варианты ответов:</p>
                                        <div className="answers" key={index++}>
                                            <p key={index++}>{question.answer1}</p>
                                            <p key={index++}>{question.answer2}</p>
                                            <p key={index++}>{question.answer3}</p>
                                            <p key={index++}>{question.answer4}</p>
                                        </div>
                                        <p key={index++}>Правильный ответ: {question.correctAnswer}</p>
                                        <hr/>
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

export default Modul
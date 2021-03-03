import React, { Component } from 'react'
import './test.css'
import Header from '../../components/Header/Header'
import Countdown from 'react-countdown'
import Loader from '../../components/Loader/Loader'
import { nanoid } from 'nanoid'

class test extends Component {

    state = {
        name: '',
        group: '',
        subjectName: 'Математика',
        testName: 'Уравнение',
        timeToComplete: '10',
        numberOfQuestions: '6',
        loader: false,
        questions: [
            {
                questionNumber: 1,
                questionVar: 1,
                questionText: 'Решите задачу: От Казани до Москвы 796 км. Из этих городов вышли одновременно навстречу друг другу два поезда. Через 3 часа поезда находились на расстоянии 556 км один от другого. С какой скоростью шёл поезд из Москвы, если скорость казанского поезда была 44 км в час',
                answer1: 'A 43 км в час',
                answer2: 'B 36 км в час',
                answer3: 'C 44 км в час',
                answer4: 'D 41 км в час',
                correctAnswer: '',
                givenAnswer: '',
                image: '',
                questionType: ''
            },
            {
                questionNumber: 2,
                questionVar: 1,
                questionText: 'Решите задачу: От Казани до Москвы 796 км. Из этих городов вышли одновременно навстречу друг другу два поезда. Через 3 часа поезда находились на расстоянии 556 км один от другого. С какой скоростью шёл поезд из Москвы, если скорость казанского поезда была 44 км в час',
                answer1: 'A 43 км в час',
                answer2: 'B 36 км в час',
                answer3: 'C 44 км в час',
                answer4: 'D 41 км в час',
                correctAnswer: '',
                givenAnswer: '',
                image: '',
                questionType: ''
            },{
                questionNumber: 1,
                questionVar: 1,
                questionText: 'Решите задачу: От Казани до Москвы 796 км. Из этих городов вышли одновременно навстречу друг другу два поезда. Через 3 часа поезда находились на расстоянии 556 км один от другого. С какой скоростью шёл поезд из Москвы, если скорость казанского поезда была 44 км в час',
                answer1: 'A 43 км в час',
                answer2: 'B 36 км в час',
                answer3: 'C 44 км в час',
                answer4: 'D 41 км в час',
                correctAnswer: '',
                givenAnswer: '',
                image: '',
                questionType: ''
            },
            {
                questionNumber: 2,
                questionVar: 1,
                questionText: 'Решите задачу: От Казани до Москвы 796 км. Из этих городов вышли одновременно навстречу друг другу два поезда. Через 3 часа поезда находились на расстоянии 556 км один от другого. С какой скоростью шёл поезд из Москвы, если скорость казанского поезда была 44 км в час',
                answer1: 'A 43 км в час',
                answer2: 'B 36 км в час',
                answer3: 'C 44 км в час',
                answer4: 'D 41 км в час',
                correctAnswer: '',
                givenAnswer: '',
                image: '',
                questionType: ''
            },{
                questionNumber: 1,
                questionVar: 1,
                questionText: 'Решите задачу: От Казани до Москвы 796 км. Из этих городов вышли одновременно навстречу друг другу два поезда. Через 3 часа поезда находились на расстоянии 556 км один от другого. С какой скоростью шёл поезд из Москвы, если скорость казанского поезда была 44 км в час',
                answer1: 'A 43 км в час',
                answer2: 'B 36 км в час',
                answer3: 'C 44 км в час',
                answer4: 'D 41 км в час',
                correctAnswer: '',
                givenAnswer: '',
                image: '',
                questionType: ''
            },
            {
                questionNumber: 2,
                questionVar: 1,
                questionText: 'Решите задачу: От Казани до Москвы 796 км. Из этих городов вышли одновременно навстречу друг другу два поезда. Через 3 часа поезда находились на расстоянии 556 км один от другого. С какой скоростью шёл поезд из Москвы, если скорость казанского поезда была 44 км в час',
                answer1: 'A 43 км в час',
                answer2: 'B 36 км в час',
                answer3: 'C 44 км в час',
                answer4: 'D 41 км в час',
                correctAnswer: '',
                givenAnswer: '',
                image: '',
                questionType: ''
            }
        ]
    }
    componentDidMount= function(){
        var tests = document.querySelectorAll('.startTestItem')

        if (tests.length <= this.state.numberOfQuestions){
            console.log('Успешно');
            setTimeout(() => {
                this.setState({loader: true})
            }, 1000);
        } else {
            setTimeout(() => {
                // window.location.reload()
            }, 1300);
        }
   }
    render() {
        const Completionist = () => {
            document.querySelector('button').style.display = 'none'
            setTimeout(function() {
                // alert('Время вышло')
                window.location.href = "/testSelection"
                }, 1000)
            return (
                <h1 className={'outtime'}>Время вышло</h1>
            )
        }
        document.body.style.overflow = 'visible'

        const renderer = ({ hours, minutes, seconds, completed }) => {
            if (this.state.loader === true){
                if (completed) {
                    return <Completionist />;
                } else {
                    return (
                        <React.Fragment>
                            <p>Оставшееся время на выполнение: <span>{hours}:{minutes}:{seconds}</span></p>
                        </React.Fragment>
                    )
                }
            } else {
                document.body.style.overflow = 'hidden'
                return (
                    <div className="render">
                        <div className='content'>
                        <h1>Подождите загрузку</h1>
                        <Loader />
                        </div>
                    </div>
                )
            }
        }

        return (
            <div className="startTest">
                <Header
                    name={this.state.name}
                    group={this.state.group}
                />
                <form>
                    <div className="startTestInfo">
                        <p>Название теста: <span>{this.state.testName}</span></p>
                        <p>Кол-во вопросов: <span>{this.state.numberOfQuestions}</span></p>
                        <p>Время на выполнение: <span>{this.state.timeToComplete} минут</span></p>
                        <Countdown date={Date.now() + this.state.timeToComplete*60000} renderer={renderer}/>
                        <button>Завершить тест</button>
                    </div>
                    <div className="startTestContent">
                        {
                            this.state.questions.map((quiz) => {
                                return (
                                    <div className="startTestItem" key={nanoid()} >
                                        {/* {console.log(quiz)} */}
                                        <h1 key={nanoid()} className="task">Задание №{quiz.questionNumber}</h1>
                                        <p key={nanoid()} className="contentTask">{quiz.questionText}</p>
                                        <input key={nanoid()} type="radio"  name="answe_1" required/>
                                        <label key={nanoid()} htmlFor="">{quiz.answer1}</label><br/>
                                        <input key={nanoid()} type="radio"  name="answe_1" required/>
                                        <label key={nanoid()} htmlFor="">{quiz.answer2}</label><br/>
                                        <input key={nanoid()} type="radio"  name="answe_1" required/>
                                        <label key={nanoid()} htmlFor="">{quiz.answer3}</label><br/>
                                        <input key={nanoid()} type="radio"  name="answe_1" required/>
                                        <label key={nanoid()} htmlFor="">{quiz.answer4}</label><br/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </form>
            </div>
        )
    }
}

export default test
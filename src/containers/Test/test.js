import React, { Component } from 'react'
import './test.css'
import Header from '../Header/Header'
import {connect} from 'react-redux'

class test extends Component {
    render() {
        return (
            <div className="startTest">
                <Header
                    name={this.props.name}
                    group={this.props.group}
                />
                <form>
                    <div className="startTestInfo">
                        <p>Название модуля: <span>Арифметические действия</span></p>
                        <p>Кол-во вопросов: <span>12</span></p>
                        <p>Время на выполнение: <span>45 минут</span></p>
                        <p>Оставшееся время на выполнение: <span id="timer"></span></p>
                        <input type="hidden" name="time_to_complete" id="ttc" value="45"/>
                        <button>Завершить тест</button>
                    </div>
                    <div className="startTestContent">
                        <div className="startTestItem">
                            <h1 className="task">Задание №1</h1>
                            <p className="contentTask">Решите задачу: От Казани до Москвы 796 км. Из этих городов вышли одновременно навстречу друг другу два поезда. Через 3 часа поезда находились на расстоянии 556 км один от другого. С какой скоростью шёл поезд из Москвы, если скорость казанского поезда была 44 км в час?</p>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">A 43 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">B 36 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">C 44 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">D 41 км в час</label><br/>
                        </div>
                        <div className="startTestItem">
                            <h1 className="task">Задание №1</h1>
                            <p className="contentTask">Решите задачу: От Казани до Москвы 796 км. Из этих городов вышли одновременно навстречу друг другу два поезда. Через 3 часа поезда находились на расстоянии 556 км один от другого. С какой скоростью шёл поезд из Москвы, если скорость казанского поезда была 44 км в час?</p>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">A 43 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">B 36 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">C 44 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">D 41 км в час</label><br/>
                        </div>
                        <div className="startTestItem">
                            <h1 className="task">Задание №1</h1>
                            <p className="contentTask">Решите задачу: От Казани до Москвы 796 км. Из этих городов вышли одновременно навстречу друг другу два поезда. Через 3 часа поезда находились на расстоянии 556 км один от другого. С какой скоростью шёл поезд из Москвы, если скорость казанского поезда была 44 км в час?</p>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">A 43 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">B 36 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">C 44 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">D 41 км в час</label><br/>
                        </div>
                        <div className="startTestItem">
                            <h1 className="task">Задание №1</h1>
                            <p className="contentTask">Решите задачу: От Казани до Москвы 796 км. Из этих городов вышли одновременно навстречу друг другу два поезда. Через 3 часа поезда находились на расстоянии 556 км один от другого. С какой скоростью шёл поезд из Москвы, если скорость казанского поезда была 44 км в час?</p>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">A 43 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">B 36 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">C 44 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">D 41 км в час</label><br/>
                        </div>
                        <div className="startTestItem">
                            <h1 className="task">Задание №1</h1>
                            <p className="contentTask">Решите задачу: От Казани до Москвы 796 км. Из этих городов вышли одновременно навстречу друг другу два поезда. Через 3 часа поезда находились на расстоянии 556 км один от другого. С какой скоростью шёл поезд из Москвы, если скорость казанского поезда была 44 км в час?</p>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">A 43 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">B 36 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">C 44 км в час</label><br/>
                            <input type="radio"  name="answe_1" required/>
                            <label htmlFor="">D 41 км в час</label><br/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        group: state.group
    }
}

export default connect(mapStateToProps)(test)
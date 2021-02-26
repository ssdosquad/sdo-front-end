import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import communication from './communication.png'
import training from './training.png'
import checklist from './checklist.png'
import shipping from './shipping.png'

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <nav>
                    <ul>
                        <Link to="/panel/connection"><img src={communication} alt="Подключенные устройства" title="Подключенные устройства" /></Link>
                        <p>Подключенные устройства</p>
                    </ul>
                    <ul>
                        <Link to=""><img src={training} alt="модуль" title="Выбор модуля" /></Link>
                        <p>Выбор модуля</p>
                    </ul>
                    <ul>
                        <Link to=""><img src={checklist} alt="Просмотр результатов" title="Просмотр результатов" /></Link>
                        <p>Просмотр результатов</p>
                    </ul>
                    <ul>
                        <Link to=""><img src={shipping} alt="Импорт оценок" title="Импорт оценок" /></Link>
                        <p>Импорт оценок</p>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu
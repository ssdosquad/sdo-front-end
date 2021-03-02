import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import communication from './dvr-24px.svg'
import training from './leaderboard-black-18dp.svg'
import checklist from './find_in_page-black-18dp.svg'
import shipping from './sim_card_download-black-18dp.svg'
// import addStudents from './group_add-24px.svg'

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
                        <Link to="/panel/module"><img src={training} alt="модуль" title="Выбор модуля" /></Link>
                        <p>Выбор модуля</p>
                    </ul>
                    <ul>
                        <Link to="/panel/events"><img src={checklist} alt="Просмотр результатов" title="Просмотр результатов" /></Link>
                        <p>Просмотр результатов</p>
                    </ul>
                    <ul>
                        <Link to="/panel/import"><img src={shipping} alt="Импорт оценок" title="Импорт оценок" /></Link>
                        <p>Импорт оценок</p>
                    </ul>
                    {/* <ul>
                        <Link to="/panel/add-students"><img src={addStudents} alt="Импорт оценок" title="Импорт оценок" /></Link>
                        <p>Добавить учеников</p>
                    </ul> */}
                </nav>
            </div>
        )
    }
}

export default Menu
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import communication from './dvr-24px.svg'
import training from './leaderboard-black-18dp.svg'
import checklist from './find_in_page-black-18dp.svg'
import shipping from './sim_card_download-black-18dp.svg'
import addStudents from './group_add-24px.svg'
import addUser from './person_add-24px.svg'
import appraisals from './baseline_sim_card_download_black_48dp.png'
import editStudent from './icons8-редактировать-пользователя-женщину-64.png'
import { connect } from 'react-redux'

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <nav>
                    {
                        this.props.atype === 'admin'
                        ?
                            <React.Fragment>
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
                                    <Link to="/panel/import"><img src={shipping} alt="Импорт модуля" title="Импорт модуля" /></Link>
                                    <p>Импорт модуля</p>
                                </ul>
                                <ul>
                                    <Link to="/panel/export-estimates"><img src={appraisals} alt="Экспортировать оценок" title="Экспортировать оценок" /></Link>
                                    <p>Экспортировать оценок</p>
                                </ul>
                                <ul>
                                    <Link to="/panel/add-students"><img src={addStudents} alt="Импорт оценок" title="Импорт оценок" /></Link>
                                    <p>Добавить учеников</p>
                                </ul>
                                <ul>
                                    <Link to="/panel/add-user"><img src={addUser} alt="Импорт оценок" title="Импорт оценок" /></Link>
                                    <p>Добавить пользователя</p>
                                </ul>
                                <ul>
                                    <Link to="/panel/edit-student"><img src={editStudent} alt="Редактировать ученика" title="Редактировать ученика" /></Link>
                                    <p>Редактировать ученика</p>
                                </ul>
                            </React.Fragment>
                        : null
                    }
                    {
                        this.props.atype === 'methodist'
                        ?
                            <React.Fragment>
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
                                    <p>Импорт модуля</p>
                                </ul>
                            </React.Fragment>
                        : null
                    }
                    {
                        this.props.atype === 'teacher'
                        ?
                            <React.Fragment>
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
                            </React.Fragment>
                        : null
                    }
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.session,
        atype: state.auth.atype
    }
}

export default connect(mapStateToProps)(Menu)
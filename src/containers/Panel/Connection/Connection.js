import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from '../../../axios/axios'
import Menu from '../../../components/menu/menu'
import './Connection.css'

class Connection extends Component {
    state = {
        students: []
    }

    componentDidMount() {
        document.title = 'Подключенные устройства';
        setInterval(() => {
            axios.get('/admin/students?type=get&session=' + this.props.session)
            .then(response => {
                this.setState({
                    students: response.data.data.sessions
                })
            }).catch(err => {
                console.log(err);
            })
        }, 2000);
    }

    render() {

        const disableAll = () => {
            axios.get('/admin/students?type=kickall&session=' + this.props.session)
            .then(response => {
                console.log(response.data);
            }).catch(err => {
                console.log(err);
            })
        }

        const disableStudent = (skey) => {
            console.log(skey);
            axios.get('/admin/students?type=kick&session=' + this.props.session + '&studkey=' + skey)
            .then(response => {
                console.log(response.data);
            }).catch(err => {
                console.log(err);
            })
        }

        return (
            <React.Fragment>
                <Menu/>
                <div className="Connection">
                    <h1 className="home">Устройства</h1>
                    <div className="control">
                        <button className="compound">Обновить соединение</button>
                        <button className="compound" onClick={disableAll}>Обнулить соединение</button>
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
                            : this.state.students.map((students) => {
                                return (
                                    <div className="item"  key={nanoid()}>
                                        <button className="confirmed" onClick={() => disableStudent(students.skey)} key={nanoid()}>Подключен</button>
                                        <div style={{margin: "auto"}} key={nanoid()}>
                                            <p key={nanoid()}>ФИО: <span className="fullName" key={nanoid()}>{students.firstnam} {students.lastname} {students.middlename}</span>, класс: <span className="class" key={nanoid()}>{students.name}</span></p>
                                            <p key={nanoid()}>Результат: <span className="result" key={nanoid()}>{students.result}</span></p>
                                            <p key={nanoid()}>{students.lastresult}</p>
                                            {/* <p className="skey" value={students.skey} style={{display:'none'}}></p> */}
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

function mapStateToProps(state) {
    return {
        session: state.auth.session
    }
}

export default connect(mapStateToProps)(Connection)
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../../../axios/axios';
import Menu from '../../../components/menu/menu'
import './AddUser.css'

class AddUser extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {

        const createUser = () => {
            const dataReqest = new FormData()
            let lastname = document.querySelector('.lastname').value
            let firstname = document.querySelector('.firstname').value
            let middlename = document.querySelector('.middlename').value
            let login = document.querySelector('.login').value
            let password = document.querySelector('.password').value
            let type = document.querySelector('.type').value
            dataReqest.append('lastname', lastname)
            dataReqest.append('firstname', firstname)
            dataReqest.append('middlename', middlename)
            dataReqest.append('login', login)
            dataReqest.append('password', password)
            dataReqest.append('type', type)
            dataReqest.append('session', this.props.session)
            axios.post('/account/create', dataReqest)
            .then(response => {
                console.log(response.data);
                window.location.reload()
            }).catch(err => {
                console.log(err);
            })
        }

        return (
            <React.Fragment>
                <Menu/>
                <div className="AddUser">
                    <form>
                        <input className="lastname" placeholder='Фамилия'/>
                        <input className="firstname" placeholder='Имя'/>
                        <input className="middlename" placeholder='Отчество'/>
                        <input className="login" placeholder='Логин'/>
                        <input className="password" className='password' type='password' placeholder='Пароль'/>
                        <select className="type" name='atype' defaultValue='DEFAULT'>
                            <option value='DEFAULT'  disabled="disabled">Выберите тип аккаунта</option>
                            <option value="teacher">Методист</option>
                            <option value="methodist">Учитель</option>
                        </select>
                        <button to="/panel/add-user" onClick={createUser}>Создать</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
function mapDispatchToProps(state) {
    return {
        session: state.auth.session
    }
}

export default connect(mapDispatchToProps)(AddUser)
import React, {Component} from 'react'
// import { NavLink } from 'react-router-dom';
import './Home.css'

let fullName = document.getElementById('fullName')

class Home extends Component {
    state = {
        groupName: [
            {name: '1пк1', id: '1'},
            {name: '2пк1', id: '2'},
            {name: '3пк1', id: '3'},
            {name: '4пк1', id: '4'},
            {name: '1пк2', id: '5'},
            {name: '2пк2', id: '6'}
        ],
        fullName: [
            {name: 'Иванов Иван Иванович'},
            {name: 'Алексеев Алексей Алексеевич'},
            {name: 'Дмитриев Дмитрий Дмитриевич'}
        ]
    }

    render() {
        return (
            <div className={'loginForTest'}>
                <form id="form">
                    <select name="" id="groupName">
                        <option value="1" disabled="disabled">Выберите свой класс</option>
                        {this.state.groupName.map((group, index) => {
                            return (
                                <option value={group.id} key={index}>{group.name}</option>
                            )
                        })}
                    </select>
                    <select name="" id="fullName">
                        <option value="0" disabled="disabled">Выберите ФИО</option>
                        {this.state.fullName.map((fullname, index) => {
                            return (
                                <option value={fullname.name} key={index}>{fullname.name}</option>
                            )
                        })}
                    </select>
                    {/* <NavLink onClick={console.log('dasda')} to="/testSelection">Войти</NavLink> */}
                    <button>Войти</button>
                </form>
            </div>
        )
    }
}

export default Home
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import './Home.css'


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
        ],
        activAccount: []
    }

    render() {
        console.log('Имя: ' + this.props.name, 'Группа: ' + this.props.group);
        function groupChangeHandler(e) {
            console.log(e.target.value);
            document.querySelector('#fullName').style.display = 'block'
        }

        function nameChangeHandler(e) {
            console.log(e.target.value);
            document.querySelector('button').style.display = 'block'
        }

        return (
            <div className={'loginForTest'}>
                <form id="form" >
                    <select name="" id="groupName" defaultValue={'DEFAULT'} onChange={groupChangeHandler}>
                        <option value='DEFAULT'  disabled="disabled">Выберите свой класс</option>
                        {this.state.groupName.map((group, index) => {
                            return (
                                <option value={group.id} key={index}>{group.name}</option>
                            )
                        })}
                    </select>
                    <select name="" id="fullName" defaultValue={'DEFAULT'} onChange={nameChangeHandler}>
                        <option value='DEFAULT' disabled="disabled">Выберите ФИО</option>
                        {this.state.fullName.map((fullname, index) => {
                            return (
                                <option value={fullname.name} key={index}>{fullname.name}</option>
                            )
                        })}
                    </select>
                    {/* <NavLink onClick={console.log('dasda')} to="/testSelection">Войти</NavLink> */}
                    <Link to='/testSelection'><button onClick={() => this.props.onAddName(document.querySelector('#fullName').value, document.querySelector('#groupName').value)}>Войти</button></Link>

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

function mapDispathToProps(dispatch) {
    return {
        onAddName: (name, group) => dispatch({type: 'ADDNAME', name: name, group: group})
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Home)
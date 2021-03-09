import axios from '../../axios/axios';
import { nanoid } from 'nanoid';
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import { connect } from 'react-redux';
import { student } from '../../store/actions/Student';

class Home extends Component {
    state = {
        groupName: [],
        fullName: [],
        gid: 'DEFAULT'
    }
    

    componentDidMount() {
        document.title = 'Авторизация учеников';
        axios.get('student/choice?type=group')
        .then(response => {
            this.setState({
                groupName: response.data.data.groups
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const groupChangeHandler= (e) => {
            axios.get('student/choice?type=student&gid='+ e.target.value)
            .then(response => {
                this.setState({
                    fullName: response.data.data.students
                })
            }).catch(err => {
                console.log(err);
            })

            this.setState({
                gid: e.target.value
            })
            document.querySelector('#fullName').style.display = 'block'
        }

        const nameChangeHandler = (e) => {
            document.querySelector('button').style.display = 'block'
        }

        const Vhod = () => {
            var groupEl = document.getElementById("groupName")
            var nameEl = document.getElementById("fullName")

            var group = groupEl.options[groupEl.selectedIndex].text
            var name = nameEl.options[nameEl.selectedIndex].text

            var gid = document.querySelector('#groupName').value

            this.props.student (
                name,
                group,
                gid
            )
        }

        return (
            <div className={'loginForTest'}>
                <form id="form" >
                    <select name="" id="groupName" value={this.state.gid} onChange={groupChangeHandler}>
                        <option value='DEFAULT'  disabled="disabled">Выберите свой класс</option>
                        {this.state.groupName.map((group) => {
                            return (
                                <option value={group.id}  key={nanoid()}>{group.name}</option>
                            )
                        })}
                    </select>
                    <select name="" id="fullName" defaultValue={'DEFAULT'} onChange={nameChangeHandler}>
                        <option value='DEFAULT' disabled="disabled">Выберите ФИО</option>
                        {this.state.fullName.map((fullname) => {
                            return (
                                <option value={fullname.id} key={nanoid()}>{fullname.lastname + ' '+ fullname.firstname + ' ' + fullname.middlename}</option>
                            )
                        })}
                    </select>
                    <Link to='/testSelection' onClick={Vhod}><button>Войти</button></Link>
                </form>
            </div>
        )
    }
}


function mapDispathToProps(dispatch) {
    return {
        student: (name, group, gid) => dispatch(student(name, group, gid))
    }
}

export default connect(null, mapDispathToProps)(Home)
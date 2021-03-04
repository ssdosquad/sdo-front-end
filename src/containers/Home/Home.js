import axios from '../../axios/axios';
import { nanoid } from 'nanoid';
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {
    state = {
        groupName: [],
        fullName: [],
        gid: 'DEFAULT'
    }

    componentDidMount() {
        axios.get('studentChoice?type=group')
        .then(response => {
            // console.log(response.data.data.groups);
            this.setState({
                groupName: response.data.data.groups
            })
            console.log(this.state.groupName);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const groupChangeHandler= (e) => {
            // var gidFun = document.querySelector('#groupName').value
            axios.get('studentChoice?type=student&gid='+ e.target.value)
            .then(response => {
                // console.log(response.data.data.students);
                this.setState({
                    fullName: response.data.data.students
                })
                // console.log(this.state.fullName);
            }).catch(err => {
                console.log(err);
            })
            // console.log(e.target.value);

            // var qwe = document.querySelector('#groupName')
            // qwe.value = e.target.value
            this.setState({
                gid: e.target.value
            })
            // console.log(qwe.value)
            document.querySelector('#fullName').style.display = 'block'
        }

        const nameChangeHandler = (e) => {
            // console.log(e.target.value);
            document.querySelector('button').style.display = 'block'
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
                    <Link to='/testSelection'><button>Войти</button></Link>
                </form>
            </div>
        )
    }
}

export default Home
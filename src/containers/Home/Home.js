import axios from 'axios';
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './Home.css'


class Home extends Component {
    state = {
        groupName: '',
        fullName: [
            {name: 'Иванов Иван Иванович'},
            {name: 'Алексеев Алексей Алексеевич'},
            {name: 'Дмитриев Дмитрий Дмитриевич'}
        ],
        activAccount: []
    }
    
    componentDidMount() {
        axios.get('http://localhost:3000/sdo/studentChoice?type=group')
        .then(response => {
            console.log(response.data.data.groups);
            // response.data.data.groups.map((group) => {
            //     this.setState({
            //         groupName: group.name
            //     })
            // })
            
        }).catch(err => {
            console.log(err); 
        })
    }

    render() {
        console.log(this.state.groupName);
        // console.log('Имя: ' + this.props.name, 'Группа: ' + this.props.group, 'время таймера: ' + this.props.timer);
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
                        {/* {this.state.groupName.map((group, index) => {
                            return (
                                <option value={group.name}  key={index}>{group.name}</option>
                            )
                        })} */}
                        <option>{this.state.groupName}</option>
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
                    <Link to='/testSelection'><button>Войти</button></Link>

                </form>
            </div>
        )
    }
}


export default Home
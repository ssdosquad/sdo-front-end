import React, { Component } from 'react'
import Menu from '../../../components/menu/menu'
import './AddStudents.css'
// import plus from "./add_circle_outline-24px.svg"
// import Addinput from './addinput'

class AddStudents extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <div className="AddStudents">
                    <form>
                        <div className="name">
                            <div className="content">
                                <div className="item">
                                    <input type="text" placeholder="Фамилия"/>
                                    <input placeholder="Имя"/>
                                    <input placeholder="Отчество"/>
                                    {/* <img src={plus}/> */}
                                    {/* {document.querySelectorAll('.onbutton').onclick = <Addinput/>} */}
                                    {/* <a to="/" className="onbutton">+</a> */}
                                </div>
                            </div>
                        </div>
                        <button>Добавить</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default AddStudents
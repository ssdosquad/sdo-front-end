import axios from '../../axios/axios';
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import classes from './Auth.module.css'

class Auth extends Component {
    render() {
        const auth = () => {
            var login = document.querySelector('.login').value
            var password = document.querySelector('.password').value
            console.log(login, password);
            axios.get('/auth?login=' + login +'&password='+ password )
            .then(response => {
                console.log(response.data);
            }).catch(err => {
                console.log(err); 
            })
        }

        return (
            <React.Fragment>
                <div className={classes.Auth}>
                    <form>
                        <input className='login' type="text" placeholder="Логин"/>
                        <input className='password' type="password" placeholder="Пароль"/>
                        <Link to="/auth">
                            <button onClick={auth}>Войти</button>
                        </Link>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Auth
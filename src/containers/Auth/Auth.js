import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import classes from './Auth.module.css'
import { connect } from 'react-redux';
import { auth } from '../../store/actions/Auth';

class Auth extends Component {
    render() {
        const auth = () => {
            var login = document.querySelector('.login').value
            var password = document.querySelector('.password').value
            this.props.auth(
                login,
                password
            )
        }

        return (
            <React.Fragment>
                <div className={classes.Auth}>
                    <form>
                        <input className='login' type="text" placeholder="Логин"/>
                        <input className='password' type="password" placeholder="Пароль"/>
                        <Link to="/panel">
                            <button onClick={auth}>Войти</button>
                        </Link>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{
        auth: (login, password) => dispatch(auth(login, password))
    }
}

export default connect(null, mapDispatchToProps)(Auth)
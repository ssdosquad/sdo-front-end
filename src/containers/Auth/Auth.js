import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import classes from './Auth.module.css'

class Auth extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={classes.Auth}>
                    <form>
                        <input type="text"></input>
                        <input type="password"></input>
                        <Link to="/auth">
                            <button>Войти</button>
                        </Link>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Auth
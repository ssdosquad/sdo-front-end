import axios from '../../axios/axios'
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes'

export function auth(login, password) {
    return async dispatch => {
        const respons = await axios.get('account/auth?login=' + login +'&password='+ password )
        // console.log(respons.data.data)

        const data = respons.data.data

        const expirationDate = new Date(new Date().getTime() + data.stime * 1000)

        localStorage.setItem('session', data.session)
        localStorage.setItem('atype', data.atype)
        localStorage.setItem('expirationDate', expirationDate)
        // console.log(localStorage);

        dispatch(authSuccess(data.session, data.atype))
        dispatch(authLogout(data.stime))
    }
}

export function authLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    localStorage.removeItem('session')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT
    }
}

export function autoLogin() {
    return dispatch => {
        const session = localStorage.getItem('session')
        const atype = localStorage.getItem('atype')
        if (!session) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(session, atype))
                dispatch(authLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}

export function authSuccess(session, atype) {
    return {
        type: AUTH_SUCCESS,
        session,
        atype
    }
}
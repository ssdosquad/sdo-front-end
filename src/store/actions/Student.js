import axios from '../../axios/axios';
import { SELECTED_STUDENT, AUTH_LOGOUT_STUDENT } from './actionTypes'

export function student(name, group, uid) {
    return async dispatch => {
        const respons = await axios.get('/student/choice?type=signin&sid=' + uid)

        const data = respons.data.data

        const expirationDateStudent = new Date(new Date().getTime() + data.stime * 1000)

        localStorage.setItem('sessionStudent', respons.data.data.session)
        localStorage.setItem('fullName', name)
        localStorage.setItem('group', group)
        localStorage.setItem('uid', uid)
        localStorage.setItem('expirationDateStudent', expirationDateStudent)
        console.log(respons.data.data);
        dispatch(studentSuccess(name, group, uid, respons.data.data.session))
        dispatch(authLogoutStudent(data.stime))
    }
}

export function authLogoutStudent(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logoutStudent())
            console.log(123);
        }, time * 1000)
    }
}

export function logoutStudent() {
    localStorage.removeItem('sessionStudent')
    localStorage.removeItem('fullName')
    localStorage.removeItem('group')
    localStorage.removeItem('uid')
    localStorage.removeItem('expirationDateStudent')
    return {
        type: AUTH_LOGOUT_STUDENT
    }
}

export function autoLoginStudent() {
    return dispatch => {
        const sessionStudent = localStorage.getItem('sessionStudent')
        const name = localStorage.getItem('fullName')
        const group = localStorage.getItem('group')
        const uid = localStorage.getItem('uid')
        if (!sessionStudent) {
            dispatch(logoutStudent())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDateStudent'))
            // console.log(expirationDate);
            if (expirationDate <= new Date()) {
                dispatch(logoutStudent())
            } else {
                dispatch(studentSuccess(name, group, uid, sessionStudent))
                dispatch(authLogoutStudent((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}

export function studentSuccess(name, group, uid, sessionStudent) {
    return {
        type: SELECTED_STUDENT,
        group,
        name,
        uid,
        sessionStudent
    }
}
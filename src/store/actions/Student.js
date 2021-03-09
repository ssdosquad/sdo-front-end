import { SELECTED_STUDENT } from './actionTypes'

export function student(name, group, gid) {
    return dispatch => {
        dispatch(studentSuccess(name, group, gid))
    }
}

export function studentSuccess(name, group, gid) {
    return {
        type: SELECTED_STUDENT,
        group,
        name,
        gid
    }
}
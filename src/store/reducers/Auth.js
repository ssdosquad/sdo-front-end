import {AUTH_LOGOUT, AUTH_SUCCESS} from '../actions/actionTypes';

const initialState = {
    session: null,
    atype: null
}


export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state, session: action.session, atype: action.atype
      }
    case AUTH_LOGOUT:
      return {
        ...state, session: null, atype: null
      }
    default:
      return state
  }
}
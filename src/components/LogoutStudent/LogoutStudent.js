import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { logoutStudent } from '../../store/actions/Student';

class LogoutStudent extends Component {
  componentDidMount() {
    this.props.logoutStudent()
    console.log(this.props.logoutStudent);
  }

  render() {
    return <Redirect to={'/'} />
  }
}


function mapDispatchToProps(dispatch) {
  return {
    logoutStudent: () => dispatch(logoutStudent())
  }
}

export default connect(null, mapDispatchToProps)(LogoutStudent)
import React, {Component} from 'react'
import './App.css'
import {Route, Switch, withRouter} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import testSelection from './containers/TestSelection/testSelection';
import Test from './containers/Test/test'
import Auth from './containers/Auth/Auth'
import Panel from './containers/Panel/Panel'
import Connection from './containers/Panel/Connection/Connection'
import Modul from './containers/Panel/Modul/Modul'
import Events from './containers/Panel/Events/Events'
import Imports from './containers/Panel/Import/Import'
import AddStudents from './containers/Panel/AddStudents/AddStudents'
import Logout from './components/Logout/Logout'
import { connect } from 'react-redux'
import AddUser from './containers/Panel/AddUser/AddUser'
import { autoLogin } from './store/actions/Auth'
import ExportEstimates from './containers/Panel/ExportEstimates/ExportEstimates'
import { autoLoginStudent } from './store/actions/Student'

class App extends Component {

  componentDidMount() {
    this.props.autoLogin()
    this.props.autoLoginStudent()
  }

  render() {
    let routesUser = (
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    )

    let routesStudent = (
      <Switch>
        <Route path="/auth" component={Auth} />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routesUser = (
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/panel" exact component={Panel}/>
          <Route path="/panel/connection" component={Connection}/>
          <Route path="/panel/module" component={Modul}/>
          <Route path="/panel/events" component={Events}/>
          <Route path="/panel/import" component={Imports}/>
          <Route path="/panel/export-estimates" component={ExportEstimates}/>
          <Route path="/panel/add-students" component={AddStudents}/>
          <Route path="/panel/add-user" component={AddUser}/>
          <Route path="/logout" component={Logout} />
        </Switch>
      )
    }

    if (this.props.isAuthenticatedStudent) {
      routesStudent = (
        <Switch>
          <Route path="/testSelection" component={testSelection} />
          <Route path="/test" exact>
            <Test />
          </Route>
        </Switch>
      )
    }

    return (
        <Layout>
          {routesStudent}
          {routesUser}
        </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.session,
    isAuthenticatedStudent: !!state.student.sessionStudent
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
    autoLoginStudent: () => dispatch(autoLoginStudent())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
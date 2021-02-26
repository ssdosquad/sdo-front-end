import React, {Component} from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import testSelection from './containers/TestSelection/testSelection';
import Test from './containers/Test/test'
import Auth from './containers/Auth/Auth'
import Panel from './containers/Panel/Panel'
import Connection from './containers/Connection/Connection'

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Switch>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/testSelection" component={testSelection} />
            <Route path="/test" exact>
              <Test />
            </Route>
            <Route path="/auth" component={Auth} />
            <Route path="/panel" exact component={Panel}/>
            <Route path="/panel/connection" exact component={Connection}/>
            <Route path="/panel/connection/as" exact component={Connection}/>
          </Layout>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App

import React, {Component} from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home'
import testSelection from './containers/TestSelection/testSelection';
import Test from './containers/Test/test'

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/testSelection" exact component={testSelection} />
          <Route path="/test" exact component={Test} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App

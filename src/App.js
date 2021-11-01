import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Card from './project_comps/Card'
import LoginPage from './project_comps/pages/LoginPage'
import SearchBar from './project_comps/SearchBar'
import SideNavbar from './project_comps/SideNavbar'
import Table from './project_comps/Table'
import './scss/style.scss'
import Dashboard from '../src/project_comps/pages/Dashboard'
import Demo from './project_comps/DemoTable'
import DemoPage from './project_comps/pages/Demo'
import CreateDemo from './project_comps/CreateDemo'
import ShareTable from './project_comps/ShareTable'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <>
        {' '}
        {/* <LoginPage/> */}
        {/* <Router>
          <SearchBar />
          <div className="mainpage">
            <SideNavbar />
            <div className="Layout-Container">
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/demopage">
                  <DemoPage/>
                </Route>
                <Route path="/createnewdemo">
                  <CreateDemo/>
                </Route>
              </Switch>
            </div>
          </div>
        </Router> */}
        <ShareTable/>
        {/* <CreateDemo/> */}
      </>
    )
  }
}

export default App

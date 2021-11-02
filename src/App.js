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
import ShareApp from './project_comps/pages/Share'
import MembersTable from './project_comps/MembersTable'
import Member from './project_comps/pages/Member'
import CreateMember from './project_comps/CreateMember'
import Customer from './project_comps/pages/Customer'
import CreateCustomer from './project_comps/CreateCustomer'
import ProductTable from './project_comps/ProductTable'
import Product from './project_comps/pages/Product'
import CreateProduct from './project_comps/CreateProduct'

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
        <Router>
          <SearchBar />
          <div className="mainpage">
            <SideNavbar />
            <div className="Layout-Container">
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/demopage">
                  <DemoPage />
                </Route>
                <Route path="/createnewdemo">
                  <CreateDemo />
                </Route>
                <Route path="/ShareApp">
                  <ShareApp />
                </Route>
                <Route path="/Members">
                  <Member />
                </Route>
                <Route path="/CreateMember">
                  <CreateMember />
                </Route>
                <Route path="/Customer">
                  <Customer />
                </Route>
                <Route path="/CreateCustomer">
                  <CreateCustomer />
                </Route>
                <Route path="/Product">
                  <Product />
                </Route>
                <Route path="/CreateProduct">
                  <CreateProduct />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </>
    )
  }
}

export default App

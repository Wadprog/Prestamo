import React, { useState, useEffect } from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import Clients from './pages/Clients'
import Client from './pages/Client'
import Alert from './component/Alert'
import Test from './component/Test'
import Login from './pages/Login'
import Register from './pages/Register'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import {loadProfiles} from './redux/actions/profile'
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './redux/actions/auth'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {
  useEffect(()=>{
    store.dispatch(loadUser())
    store.dispatch(loadProfiles())
  }, [])
  
  if (localStorage.token) setAuthToken(localStorage.token)
  const { Fragment } = React
  return (
    <Provider store={store}>
      <Fragment>
        <main>
          <Navbar />
          <div className=" mt-2">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/clients" component={Clients} />
              <Route path="/client/:id" component={Client} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/test" component={Test} />
            </Switch>
          </div>
          <Footer />
        </main>
      </Fragment>
    </Provider>
  )
}

export default App

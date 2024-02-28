import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './components/Homepage'
import Registerpage from './components/Registerpage'
import Loginpage from './components/Loginpage'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'

function App() {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" exact />
          <Route component={Homepage} path="/" exact />
          <Route component={Recipe} path="/recipe" exact />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
import React from "react"
import Signup from "./Signup"
// import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Home from "./Home"
import './app.css'
import Recalls from "./Recalls"


function App() {
  return (
    <div style={{backgroundColor: "#f8f8f8", width:"100vw", height:'100vh',backgroundSize: 'cover'}}>
      <div style={{textAlign: 'center', width:"60vw", margin: "0 auto"}}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/recalls" component={Recalls} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
        </div>
      </div>
  )
}

export default App

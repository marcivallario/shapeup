import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from "./components/Login"

import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react'

function App() {
  const [ user, setUser ] = useState('')
  
  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if (res.ok) {
        res.json().then(user => {
          setUser(user)})
      }
    })
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/signup'>
          {(!user) ? <Signup setUser={setUser} /> : <div></div>}
        </Route>
        <Route path='/login'>
          {(!user) ? <Login /> : <div></div>}
        </Route>
        <Route exact path="/">
          {(!user) ? <Landing /> : <Home />}
        </Route>
      </Switch>
    </div>
  )
}

export default App;

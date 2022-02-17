import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from "./components/Login"
import WorkoutGenerator from './components/WorkoutGenerator';
import WorkoutShow from './components/WorkoutShow';


import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react'

function App() {
  const [ user, setUser ] = useState('')
  const [ savedWorkouts, setSavedWorkouts ] = useState([])

  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
    })}, [])

  useEffect(() => {
     if (user.id) {
      fetch('/saved_workouts')
       .then(res => res.json())
       .then(workouts => setSavedWorkouts(workouts))
      }
    }, [user])



  // console.log('User: ', user)

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Switch>
        <Route path='/signup'>
          {(!user) ? <Signup setUser={setUser} /> : <div></div>}
        </Route>
        <Route path='/login'>
          {(!user) ? <Login setUser={setUser} /> : <div></div>}
        </Route>
         <Route path='/generate-a-workout'>
          <WorkoutGenerator user={user} setSavedWorkouts={setSavedWorkouts} savedWorkouts={savedWorkouts}/>
        </Route>
        <Route path='/saved-workouts/:workoutId'>
            <WorkoutShow savedWorkouts={savedWorkouts} user={user}/>
        </Route>
        <Route exact path="/">
          {(!user) ? <Landing /> : <Home savedWorkouts={savedWorkouts} setSavedWorkouts={setSavedWorkouts}/>}
        </Route>
      </Switch>
    </div>
  )
}

export default App;

import { useEffect, useState } from 'react';
import { NavLink, useHistory } from "react-router-dom"

import ReactPlayer from "react-player";

function WorkoutGenerator({ user, setSavedWorkouts, savedWorkouts }) {
    let history = useHistory();
    const [ randomWorkout, setRandomWorkout ] = useState({
    abs: {
      name:'',
      video_url: ''
    },
    chest: {
       name:'',
      video_url: ''
    },
    back: {
       name:'',
      video_url: ''
    },
    legs: {
       name:'',
      video_url: ''
    },
    cardio: {
       name:'',
      video_url: ''
    }
  })
    console.log('WO: ', randomWorkout)

    useEffect(() => {
    fetch('/muscle_groups')
    .then(res => {
      if (res.ok) {
        res.json().then(workoutFull => setRandomWorkout(workoutFull))
      }
    })}, [])

    function handleGenerateNew(e) {
        let muscle_group = e.target.name
        fetch(`/${muscle_group}`)
        .then(res => res.json())
        .then(workout => {
            console.log(workout)
            setRandomWorkout({...randomWorkout, [muscle_group]: workout})
        })
    }

    function handleSaveWorkout() {
        fetch('/saved_workouts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                abs_workout: randomWorkout.abs.video_url,
                chest_workout: randomWorkout.chest.video_url,
                legs_workout: randomWorkout.legs.video_url,
                back_workout: randomWorkout.back.video_url,
                cardio_workout: randomWorkout.cardio.video_url
            })
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(saved => {
                    setSavedWorkouts([...savedWorkouts, saved])
                    history.push("/")
                })
            } else {
                res.json()
                .then(response => console.log(response))
            }
        })
    }

    
    return (
        <div id="workout-generator">
            <div id="random-workout">
                <div id="back">
                    <h3>Back: {randomWorkout.back.name}</h3>
                    <ReactPlayer url={randomWorkout.back.video_url}/>
                    <button className="new-random-button" name="back" onClick={handleGenerateNew}>Generate New Back Exercise</button>
                </div> 
                <div id="abs">
                    <h3>Abs: {randomWorkout.abs.name}</h3>
                    <ReactPlayer url={randomWorkout.abs.video_url}/>
                    <button className="new-random-button" name="abs" onClick={handleGenerateNew}>Generate New Abs Exercise</button>
                </div>
                <div id="chest">
                    <h3>Chest: {randomWorkout.chest.name}</h3>
                    <ReactPlayer url={randomWorkout.chest.video_url}/>
                    <button className="new-random-button" name="chest" onClick={handleGenerateNew}>Generate New Chest Exercise</button>
                </div>
                <div id="legs">
                    <h3>Legs: {randomWorkout.legs.name}</h3>
                    <ReactPlayer url={randomWorkout.legs.video_url}/>
                    <button className="new-random-button" name="legs" onClick={handleGenerateNew}>Generate New Legs Exercise</button>
                </div>
                <div id="cardio">
                    <h3>Cardio: {randomWorkout.cardio.name}</h3>
                    <ReactPlayer url={randomWorkout.cardio.video_url}/>
                    <button className="new-random-button" name="cardio" onClick={handleGenerateNew}>Generate New Cardio Exercise</button>
                </div>
            </div>
            {user ? <button onClick={handleSaveWorkout}>Save Workout</button> : <NavLink
                            to="/login" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}><button>Login to Save Workout</button></NavLink>}
        </div>
    )
}

export default WorkoutGenerator;
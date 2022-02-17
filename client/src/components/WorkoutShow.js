import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";

function WorkoutShow({savedWorkouts, user}) {
    const params = useParams();
    const [ workout, setWorkout ] = useState(savedWorkouts.find(workout => workout.id === parseInt(params.workoutId)))

    useEffect(() => {
        if (user.id && params.workoutId) {
            fetch(`/saved_workouts/${params.workoutId}`)
            .then(res => res.json())
            .then(data => setWorkout(data))
        }
    }, [user, params.workoutId])

    function handleChange(e) {
        let muscle_group = e.target.name
        fetch(`/${muscle_group}`)
        .then(res => res.json())
        .then(data => {
            console.log('Server return: ', data)
            setWorkout({...workout, [`${muscle_group}_name`]: data.name, [`${muscle_group}_workout`]: data.video_url})
        })
    }
    console.log('Workout: ', workout)
    
    function handleUpdate() {
        fetch(`/saved_workouts/${workout.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workout)
        })
    }
    

    if (workout) {
        return (
            <div>
                <h3>Workout #{workout.id}</h3>
                <div id="back">
                    <h3>Back: {workout.back_name}</h3>
                    <ReactPlayer url={workout.back_workout}/>
                    <button className="new-random-button" name="back" onClick={handleChange}>Generate New Back Exercise</button>
                </div> 
                <div id="abs">
                    <h3>Abs: {workout.abs_name}</h3>
                    <ReactPlayer url={workout.abs_workout}/>
                    <button className="new-random-button" name="abs">Generate New Abs Exercise</button>
                </div>
                <div id="chest">
                    <h3>Chest: {workout.chest_name}</h3>
                    <ReactPlayer url={workout.chest_workout}/>
                    <button className="new-random-button" name="chest">Generate New Chest Exercise</button>
                </div>
                <div id="legs">
                    <h3>Legs: {workout.legs_name}</h3>
                    <ReactPlayer url={workout.legs_workout}/>
                    <button className="new-random-button" name="legs">Generate New Legs Exercise</button>
                </div>
                <div id="cardio">
                    <h3>Cardio: {workout.cardio_name}</h3>
                    <ReactPlayer url={workout.cardio_workout}/>
                    <button className="new-random-button" name="cardio">Generate New Cardio Exercise</button>
                </div>
                <button onClick={handleUpdate}>Save Changes</button>
            </div>
        );
    } else {
        return (<div></div>)
    }
    
}

export default WorkoutShow;
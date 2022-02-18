import { useEffect, useState } from 'react';
import { NavLink, useHistory } from "react-router-dom"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
        let newSaved = {
            abs_workout: randomWorkout.abs.video_url,
            abs_name: randomWorkout.abs.name,
            chest_workout: randomWorkout.chest.video_url,
            chest_name: randomWorkout.chest.name,
            legs_workout: randomWorkout.legs.video_url,
            legs_name: randomWorkout.legs.name,
            back_workout: randomWorkout.back.video_url,
            back_name: randomWorkout.back.name,
            cardio_workout: randomWorkout.cardio.video_url,
            cardio_name: randomWorkout.cardio.name
        }
        console.log('Beginning of Save - body to be sent: ', newSaved)

        fetch('/saved_workouts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSaved)
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(saved => {
                    console.log('Server response after post: ', saved)
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
            <h1 className="page-title">Generate a Workout</h1>
            <div className="accordion">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                        <h3>Back: <span className="green-accent">{randomWorkout.back.name}</span></h3> 
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="random-workout-details">
                            <ReactPlayer url={randomWorkout.back.video_url}/>
                            <button className="new-random-button" name="back" onClick={handleGenerateNew}>Generate New Back Exercise</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    >
                        <h3>Abs: <span className="green-accent">{randomWorkout.abs.name}</span></h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="random-workout-details">
                            <ReactPlayer url={randomWorkout.abs.video_url}/>
                            <button className="new-random-button" name="abs" onClick={handleGenerateNew}>Generate New Abs Exercise</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    >
                        <h3>Chest: <span className="green-accent">{randomWorkout.chest.name}</span></h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="random-workout-details">
                            <ReactPlayer url={randomWorkout.chest.video_url}/>
                            <button className="new-random-button" name="chest" onClick={handleGenerateNew}>Generate New Chest Exercise</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    >
                        <h3>Legs: <span className="green-accent">{randomWorkout.legs.name}</span></h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="random-workout-details">
                            <ReactPlayer url={randomWorkout.legs.video_url}/>
                            <button className="new-random-button" name="legs" onClick={handleGenerateNew}>Generate New Legs Exercise</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    >
                        <h3>Cardio: <span className="green-accent">{randomWorkout.cardio.name}</span></h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="random-workout-details">
                            <ReactPlayer url={randomWorkout.cardio.video_url}/>
                            <button className="new-random-button" name="cardio" onClick={handleGenerateNew}>Generate New Cardio Exercise</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            
            {user ? <button id="save-workout" onClick={handleSaveWorkout}>Save Workout</button> : <NavLink
                            to="/login" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}><button id="login-to-save">Login to Save Workout</button></NavLink>}
        </div>
    )
}

export default WorkoutGenerator;
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactPlayer from "react-player";

function WorkoutShow({savedWorkouts, user}) {
    const params = useParams();
    const [ workout, setWorkout ] = useState(savedWorkouts.find(workout => workout.id === parseInt(params.workoutId)))
    const [expanded, setExpanded] = useState(false);
    const [isSaved, setIsSaved ] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    useEffect(() => {
        if (user.id && params.workoutId) {
            fetch(`/saved_workouts/${params.workoutId}`)
            .then(res => res.json())
            .then(data => setWorkout(data))
        }
    }, [user, params.workoutId])

    function handleExerciseChange(e) {
        let muscle_group = e.target.name
        fetch(`/${muscle_group}`)
        .then(res => res.json())
        .then(data => {
            setIsSaved(false);
            setWorkout({...workout, [`${muscle_group}_name`]: data.name, [`${muscle_group}_workout`]: data.video_url})
        })
    }
    
    function handleUpdate() {
        fetch(`/saved_workouts/${workout.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workout)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(() => setIsSaved(true))
            } else {
                res.json()
                .then(response => console.log(response))
            }
        })
    }
    

    if (workout) {
        return (
            <div id="workout-review">
                <h1 className="page-title">Review Workout</h1>
                <div className="accordion">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                            <h3>Back: <span className="green-accent">{workout.back_name}</span></h3> 
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="saved-workout-details">
                                <ReactPlayer url={workout.back_workout}/>
                                <button className="new-random-button" name="back" onClick={handleExerciseChange}>Generate New Back Exercise</button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                            <h3>Abs: <span className="green-accent">{workout.abs_name}</span></h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="saved-workout-details">
                                <ReactPlayer url={workout.abs_workout}/>
                                <button className="new-random-button" name="abs" onClick={handleExerciseChange}>Generate New Abs Exercise</button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                            <h3>Chest: <span className="green-accent">{workout.chest_name}</span></h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="saved-workout-details">
                                <ReactPlayer url={workout.chest_workout}/>
                                <button className="new-random-button" name="chest" onClick={handleExerciseChange}>Generate New Chest Exercise</button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                            <h3>Legs: <span className="green-accent">{workout.legs_name}</span></h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="saved-workout-details">
                                <ReactPlayer url={workout.legs_workout}/>
                                <button className="new-random-button" name="legs" onClick={handleExerciseChange}>Generate New Legs Exercise</button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                        >
                            <h3>Cardio: <span className="green-accent">{workout.cardio_name}</span></h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="saved-workout-details">
                                <ReactPlayer url={workout.cardio_workout}/>
                                <button className="new-random-button" name="cardio" onClick={handleExerciseChange}>Generate New Cardio Exercise</button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                {isSaved ?<button id="changes-saved" disabled>Changes saved!</button> : <button id="save-changes" onClick={handleUpdate}>Save Changes</button> }
            </div>
        );
    } else {
        return (<div></div>)
    }
    
}

export default WorkoutShow;
import icon from '../assets/workout_icon.png'
import { Link } from "react-router-dom";

function SavedWorkoutCard({ workout, onDelete, number }) {
    
    function handleDelete() {
        fetch(`/saved_workouts/${workout.id}`, {
            method: 'DELETE'
            })
        .then(onDelete(workout));
    }

    return (
        <div className="saved-workout-card" workout={workout}>
            <Link to={`/saved-workouts/${workout.id}`}>
                <div className="saved-card-details">
                    <div id="workout-card-img-container">
                        <img src={icon} alt="Saved Workout" />
                    </div>
                <h5>Workout #{number + 1}</h5>
                </div>
            </Link>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default SavedWorkoutCard;
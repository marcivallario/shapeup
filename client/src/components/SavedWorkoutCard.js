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
            
                <div className="saved-card-details">
                    <Link to={`/saved-workouts/${workout.id}`}>
                        <div className="workout-card-img-container">
                            <img src={icon} alt="Saved Workout" />
                        </div>
                    </Link>
                    <div className="card-label">
                        <Link to={`/saved-workouts/${workout.id}`}><h5>Workout #{number + 1}</h5></Link>
                        <button onClick={handleDelete}>X</button>
                    </div>
                </div>
            
            
        </div>
    )
}

export default SavedWorkoutCard;
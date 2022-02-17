import icon from '../assets/workout_icon.png'
import { Link } from "react-router-dom";

function SavedWorkoutCard({ workout }) {
    return (
        <div className="saved-workout-card" workout={workout}>
            <Link to={`/saved-workouts/${workout.id}`}>
                <div className="saved-card-details">
                    <div id="workout-card-img-container">
                        <img src={icon} alt="Saved Workout" />
                    </div>
                <h5>Workout #{workout.id}</h5>
                </div>
            </Link>
            <button>X</button>
        </div>
    )
}

export default SavedWorkoutCard;
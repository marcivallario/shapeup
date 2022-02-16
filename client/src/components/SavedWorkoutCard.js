function SavedWorkoutCard({ workout }) {
    return(
        <div className="saved-workout-card">
            <p>{workout.back_workout}</p>
            <p>{workout.abs_workout}</p>
            <p>{workout.chest_workout}</p>
            <p>{workout.legs_workout}</p>
            <p>{workout.cardio_workout}</p>
        </div>
    )
}

export default SavedWorkoutCard;
import SavedWorkoutCard from "./SavedWorkoutCard"


function Home({ savedWorkouts, setSavedWorkouts }) {

    function onDelete(workoutToDelete) {
        setSavedWorkouts(savedWorkouts.filter(workout => workout.id !== workoutToDelete.id))
    }

   if (savedWorkouts.length > 0) {
       const renderWorkouts = savedWorkouts.map(workout => (
            <li key={workout.id}>
                <SavedWorkoutCard key={workout.id} workout={workout} onDelete={onDelete}/>
            </li>
        ));

        return (
            <div id="home">
                <ul>{renderWorkouts}</ul>
            </div>);
    } else {
        return (
            <div id="home">
                <h2>You haven't saved any workouts!</h2>
            </div>
        )
    }
}

export default Home;
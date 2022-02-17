import SavedWorkoutCard from "./SavedWorkoutCard"


function Home({ savedWorkouts }) {

   if (savedWorkouts.length > 0) {
       const renderWorkouts = savedWorkouts.map(workout => (
            <li key={workout.id}>
                <SavedWorkoutCard key={workout.id} workout={workout}/>
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
import SavedWorkoutCard from "./SavedWorkoutCard"

function Home({ savedWorkouts }) {

    // function renderCards() {
    //     if (savedWorkouts.length > 0) {
    //         savedWorkouts.map(workout => {
    //             console.log('Map :', workout)
    //             return <SavedWorkoutCard />
    //         })
    //     } else {
    //         return (<p>Save a Workout!</p>)
    //     }
    // }

    if (savedWorkouts.length > 0) {
        return (
            <div id="home">
                {savedWorkouts.map(workout => {
                    console.log('Map :', workout)
                    return <SavedWorkoutCard key={workout.id} workout={workout}/>
                })}
            </div>
        )
    } else {
        return (
            <div id="home">
                <h2>You haven't saved any workouts!</h2>
            </div>
        )
    }
}

export default Home;
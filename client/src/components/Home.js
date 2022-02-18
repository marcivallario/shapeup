import SavedWorkoutCard from "./SavedWorkoutCard"
import { NavLink } from "react-router-dom";


function Home({ savedWorkouts, setSavedWorkouts }) {
    function onDelete(workoutToDelete) {
        setSavedWorkouts(savedWorkouts.filter(workout => workout.id !== workoutToDelete.id))
    }

   if (savedWorkouts.length > 0) {
       
       const renderWorkouts = savedWorkouts.map((workout, index) => {
        return (
            <SavedWorkoutCard key={workout.id} workout={workout} onDelete={onDelete} number={index} />
        )});

        return (
            <div id="home">
                <h1>My Saved <span className="green-accent">Workouts</span></h1>
                <div id="cards-container">
                    {renderWorkouts}
                </div>
            </div>);
    } else {
        return (
            <div id="home-no-saved">
                <div id="no-saved-details">
                    <h2>You haven't saved a workout yet!</h2>
                    <p>Head over to the <NavLink
                            to="/generate-a-workout" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}>Workout Generator </NavLink> to get started.</p>
                </div>
                
            </div>
        )
    }
}

export default Home;
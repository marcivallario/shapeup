class SavedWorkoutsController < ApplicationController
    def index
        current_user = User.find_by(id: session[:user_id])
        if (current_user) 
            render json: current_user.saved_workouts
        else 
            render json: {error: "User not authorized"}, status: :unauthorized
        end
    end

    def show
        saved_workout = SavedWorkout.find(params[:id])
        render json: saved_workout
    end

    def create
        saved_workout = SavedWorkout.create!(workout_params)
        render json: saved_workout
    end

    def update
        saved_workout = SavedWorkout.update!(workout_params)
        render json: saved_workout
    end

    def destroy
        saved_workout = SavedWorkout.find(params[:id])
        saved_workout.destroy
        head :no_content
    end

    private

    def workout_params
        params.permit(:back_workout, :abs_workout, :chest_workout, :legs_workout, :cardio_workout)
    end

end
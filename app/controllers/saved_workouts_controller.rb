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
        auth_user = auth
        saved_workout = auth_user.saved_workouts.create!(workout_params)
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
        params.permit(:back_workout, :back_name, :abs_workout, :abs_name, :chest_workout, :chest_name, :legs_workout, :legs_name, :cardio_workout, :cardio_name)
    end

end
class MuscleGroupsController < ApplicationController
    def index
        abs = MuscleGroup.where(group_name: "Abs")[0].workouts.limit(1).order('RANDOM()')
        back = MuscleGroup.where(group_name: "Back")[0].workouts.limit(1).order('RANDOM()')
        legs = MuscleGroup.where(group_name: "Legs")[0].workouts.limit(1).order('RANDOM()')
        chest = MuscleGroup.where(group_name: "Chest")[0].workouts.limit(1).order('RANDOM()')
        cardio = MuscleGroup.where(group_name: "Cardio")[0].workouts.limit(1).order('RANDOM()')
        render json: {abs_wo: abs, back_wo: back, legs_wo: legs, chest_wo: chest, cardio_wo: cardio}, status: :ok
    end
end

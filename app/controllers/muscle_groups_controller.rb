class MuscleGroupsController < ApplicationController
    def index
        abs = MuscleGroup.where(group_name: "Abs")[0].workouts.limit(1).order('RANDOM()')[0]
        back = MuscleGroup.where(group_name: "Back")[0].workouts.limit(1).order('RANDOM()')[0]
        legs = MuscleGroup.where(group_name: "Legs")[0].workouts.limit(1).order('RANDOM()')[0]
        chest = MuscleGroup.where(group_name: "Chest")[0].workouts.limit(1).order('RANDOM()')[0]
        cardio = MuscleGroup.where(group_name: "Cardio")[0].workouts.limit(1).order('RANDOM()')[0]
        render json: {abs: abs, back: back, legs: legs, chest: chest, cardio: cardio}, status: :ok
    end

    def abs
        abs = MuscleGroup.where(group_name: "Abs")[0].workouts.limit(1).order('RANDOM()')[0]
        render json: abs, status: :ok
    end

    def back
        back = MuscleGroup.where(group_name: "Back")[0].workouts.limit(1).order('RANDOM()')[0]
        render json: back, status: :ok
    end

    def chest
        chest = MuscleGroup.where(group_name: "Chest")[0].workouts.limit(1).order('RANDOM()')[0]
        render json: chest, status: :ok
    end

    def legs
        legs = MuscleGroup.where(group_name: "Legs")[0].workouts.limit(1).order('RANDOM()')[0]
        render json: legs, status: :ok
    end

    def cardio
        cardio = MuscleGroup.where(group_name: "Cardio")[0].workouts.limit(1).order('RANDOM()')[0]
        render json: cardio, status: :ok
    end
end

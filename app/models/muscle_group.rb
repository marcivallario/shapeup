class MuscleGroup < ApplicationRecord
    has_many :target_muscles
    has_many :workouts, through: :target_muscles
end

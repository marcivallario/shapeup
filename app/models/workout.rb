class Workout < ApplicationRecord
    has_many :target_muscles
    has_many :muscle_groups, through: :target_muscles
end

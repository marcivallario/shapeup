class TargetMuscle < ApplicationRecord
    belongs_to :muscle_group
    belongs_to :workout
end

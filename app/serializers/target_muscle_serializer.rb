class TargetMuscleSerializer < ActiveModel::Serializer
  attributes :id, :muscle_group_id, :workout_id
end

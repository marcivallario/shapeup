class SavedWorkoutSerializer < ActiveModel::Serializer
  attributes :id, :back_workout, :abs_workout, :chest_workout, :legs_workout, :cardio_workout, :user_id
end

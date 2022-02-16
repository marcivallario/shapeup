class SavedWorkoutSerializer < ActiveModel::Serializer
  attributes :id, :back_workout, :back_name, :abs_workout, :abs_name, :chest_workout, :chest_name, :legs_workout, :legs_name, :cardio_workout, :cardio_name, :user_id
end

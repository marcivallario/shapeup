class CreateSavedWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_workouts do |t|
      t.string :back_workout
      t.string :abs_workout
      t.string :chest_workout
      t.string :legs_workout
      t.string :cardio_workout
      t.string :user_id

      t.timestamps
    end
  end
end

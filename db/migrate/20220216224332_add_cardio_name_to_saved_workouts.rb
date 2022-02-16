class AddCardioNameToSavedWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :saved_workouts, :cardio_name, :string
  end
end

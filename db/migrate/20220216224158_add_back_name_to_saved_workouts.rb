class AddBackNameToSavedWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :saved_workouts, :back_name, :string
  end
end

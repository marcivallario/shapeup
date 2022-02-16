class AddLegsNameToSavedWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :saved_workouts, :legs_name, :string
  end
end

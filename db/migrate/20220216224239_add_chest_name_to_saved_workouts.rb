class AddChestNameToSavedWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :saved_workouts, :chest_name, :string
  end
end

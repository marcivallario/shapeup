class AddAbsNameToSavedWorkouts < ActiveRecord::Migration[6.1]
  def change
    add_column :saved_workouts, :abs_name, :string
  end
end

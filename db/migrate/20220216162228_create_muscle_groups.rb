class CreateMuscleGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :muscle_groups do |t|
      t.string :group_name

      t.timestamps
    end
  end
end

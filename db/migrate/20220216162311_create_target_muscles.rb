class CreateTargetMuscles < ActiveRecord::Migration[6.1]
  def change
    create_table :target_muscles do |t|
      t.integer :muscle_group_id
      t.integer :workout_id

      t.timestamps
    end
  end
end

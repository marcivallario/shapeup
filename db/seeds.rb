# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

puts "Seeding..."

u1 = User.create(email: 'marcivallario@gmail.com', first_name: 'Marci', last_name: 'Vallario', password: '123098')
u2 = User.create(email: 'aweaver@gmail.com', first_name: 'Alex', last_name: 'Weaver', password: '1230987')

wo1 = Workout.create(name: 'Crunches', video_url: 'https://www.youtube.com/watch?v=Xyd_fa5zoEU')
wo2 = Workout.create(name: 'Squat', video_url: 'https://www.youtube.com/watch?v=aclHkVaku9U')
wo3 = Workout.create(name: 'Bench Press', video_url: 'https://www.youtube.com/watch?v=ryUKqQ14Jts')
wo4 = Workout.create(name: 'Jump Rope', video_url: 'https://www.youtube.com/watch?v=u3zgHI8QnqE')
wo5 = Workout.create(name: 'Flyaways', video_url: 'https://www.youtube.com/watch?v=M1CzdNm8huc')
wo6 = Workout.create(name: 'Sit Ups', video_url: 'https://www.youtube.com/watch?v=1fbU_MkV7NE')
wo7 = Workout.create(name: 'Lunge', video_url: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U')
wo8 = Workout.create(name: 'Push Up', video_url: 'https://www.youtube.com/watch?v=FaIpD_zfrJI')
wo9 = Workout.create(name: 'Burpees', video_url:'https://www.youtube.com/watch?v=qLBImHhCXSw')
wo10 = Workout.create(name: 'Pull-Ups', video_url: 'https://www.youtube.com/watch?v=Es_psmnCn20')

mg1 = MuscleGroup.create(group_name: 'Abs')
mg2 = MuscleGroup.create(group_name: 'Back')
mg3 = MuscleGroup.create(group_name: 'Legs')
mg4 = MuscleGroup.create(group_name: 'Chest')
mg5 = MuscleGroup.create(group_name: 'Cardio')

tm1 = TargetMuscle.create(muscle_group_id: mg1.id, workout_id: wo1.id)
tm2 = TargetMuscle.create(muscle_group_id: mg3.id, workout_id: wo2.id)
tm3 = TargetMuscle.create(muscle_group_id: mg4.id, workout_id: wo3.id)
tm4 = TargetMuscle.create(muscle_group_id: mg5.id, workout_id: wo4.id)
tm5 = TargetMuscle.create(muscle_group_id: mg2.id, workout_id: wo5.id)
tm6 = TargetMuscle.create(muscle_group_id: mg1.id, workout_id: wo6.id)
tm7 = TargetMuscle.create(muscle_group_id: mg3.id, workout_id: wo7.id)
tm8 = TargetMuscle.create(muscle_group_id: mg4.id, workout_id: wo8.id)
tm9 = TargetMuscle.create(muscle_group_id: mg5.id, workout_id: wo9.id)
tm10 = TargetMuscle.create(muscle_group_id: mg2.id, workout_id: wo10.id)


puts "Seeding complete"

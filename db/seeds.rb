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

wo1 = Workout.create(name: 'Crunches', video_url: 'https://www.youtube.com/watch?v=Xyd_fa5zoEU') abs
wo2 = Workout.create(name: 'Squat', video_url: 'https://www.youtube.com/watch?v=aclHkVaku9U') legs
wo3 = Workout.create(name: 'Bench Press', video_url: 'https://www.youtube.com/watch?v=ryUKqQ14Jts') chest
wo4 = Workout.create(name: 'Jump Rope', video_url: 'https://www.youtube.com/watch?v=u3zgHI8QnqE') cardio
wo5 = Workout.create(name: 'Flyaways', video_url: 'https://www.youtube.com/watch?v=M1CzdNm8huc') back
wo6 = Workout.create(name: 'Sit Ups', video_url: 'https://www.youtube.com/watch?v=1fbU_MkV7NE') abs
wo7 = Workout.create(name: 'Lunge', video_url: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U') legs
wo8 = Workout.create(name: 'Push Up', video_url: 'https://www.youtube.com/watch?v=FaIpD_zfrJI') chest
wo9 = Workout.create(name: 'Burpees', video_url:'https://www.youtube.com/watch?v=qLBImHhCXSw') cardio
wo10 = Workout.create(name: 'Pull-Ups', video_url: 'https://www.youtube.com/watch?v=Es_psmnCn20') back
wo11 = Workout.create(name: 'Plank', video_url: 'https://www.youtube.com/watch?v=B296mZDhrP4') abs
wo12 = Workout.create(name: 'Deadlift', video_url: 'https://www.youtube.com/watch?v=op9kVnSso6Q') legs
wo13 = Workout.create(name: 'Incline Bench Press', video_url: 'https://www.youtube.com/watch?v=7UB2HQg5FNY') chest
wo14 = Workout.create(name: 'Jumping Jacks', video_url: 'https://www.youtube.com/watch?v=1b98WrRrmUs') cardio
wo15 = Workout.create(name: 'Row', video_url: 'https://www.youtube.com/watch?v=8A1L68C3_iM') back
wo16 = Workout.create(name: 'Russian Twists', video_url: 'https://www.youtube.com/watch?v=JyUqwkVpsi8') abs
wo17 = Workout.create(name: 'Good Mornings', video_url: 'https://www.youtube.com/watch?v=YA-h3n9L4YU') legs
wo18 = Workout.create(name: 'Dumbbell Flye', video_url: 'https://www.youtube.com/watch?v=UKwkChzThig') chest
wo19 = Workout.create(name: 'Stair Climber', video_url: 'https://www.youtube.com/watch?v=M4EwUHn61Gw') cardio
wo20 = Workout.create(name: 'Kettlebell Swings', video_url: 'https://www.youtube.com/watch?v=mKDIuUbH94Q') back
wo21 = Workout.create(name: 'V-Ups', video_url: 'https://www.youtube.com/watch?v=iP2fjvG0g3w') abs
wo22 = Workout.create(name: 'Leg Curl', video_url: 'https://www.youtube.com/watch?v=ZHlBSI6JPsA') legs
wo23 = Workout.create(name: 'Pullover', video_url: 'https://www.youtube.com/watch?v=KQOBt5gjkSI') chest 
wo24 = Workout.create(name: 'Interval Sprints', video_url: 'https://www.youtube.com/watch?v=PkAw3NbcJ78') cardio
wo25 = Workout.create(name: 'Lat Pulldowns', video_url: 'https://www.youtube.com/watch?v=1VcmFW5diOU') back
wo26 = Workout.create(name: 'High Boat Low Boat', video_url: 'https://www.youtube.com/watch?v=VN-6jygZ094') abs
wo27 = Workout.create(name: 'Box Jumps', video_url: 'https://www.youtube.com/watch?v=NBY9-kTuHEk') legs
wo28 = Workout.create(name: 'Diamond Pushups', video_url: 'https://www.youtube.com/watch?v=jaxbEHLC4qU') chest
wo29 = Workout.create(name: 'High Knees', video_url: 'https://www.youtube.com/watch?v=tx5rgpDAJRI') cardio
wo30 = Workout.create(name: 'Arnold Press', video_url: 'https://www.youtube.com/watch?v=R-RTgOxrj88') back
wo31 = Workout.create(name: 'Leg Raises', video_url: 'https://www.youtube.com/watch?v=G1SXQw061wQ&t=14s') abs
wo32 = Workout.create(name: 'Leg Press', video_url: 'https://www.youtube.com/watch?v=fM2WvgirlLM') legs
wo33 = Workout.create(name: 'Deltoid Raises', video_url: 'https://www.youtube.com/watch?v=wZnsZsMywrY') chest
wo34 = Workout.create(name: 'Mountain Climbers', video_url: 'https://www.youtube.com/watch?v=zT-9L3CEcmk') cardio
wo35 = Workout.create(name: 'Renegade Row', video_url: 'https://www.youtube.com/watch?v=G1AcX8Y_byg') back
wo36 = Workout.create(name: 'Superman', video_url: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ') abs
wo37 = Workout.create(name: 'Duck Walks', video_url: 'https://www.youtube.com/watch?v=Lm44SFUFcag') legs
wo38 = Workout.create(name: 'Dumbbell Squeeze Press', video_url: 'https://www.youtube.com/watch?v=n_0waCMD688') chest
wo39 = Workout.create(name: 'Punching Bag Work', video_url: 'https://www.youtube.com/watch?v=3NuaZx6pHzM') cardio
wo40 = Workout.create(name: 'Reverse Flyes', video_url: 'https://www.youtube.com/watch?v=rtkvodbZfGY') back
wo41 = Workout.create(name: 'Bicycles', video_url: 'https://www.youtube.com/watch?v=9FGilxCbdz8') abs
wo42 = Workout.create(name: 'Banded Step-Out Squat', video_url: 'https://www.youtube.com/watch?v=yzyvCyS49Q8') legs
wo43 = Workout.create(name: 'Machine Chest Press', video_url: 'https://www.youtube.com/watch?v=2y6ntGVg4dw') chest
wo44 = Workout.create(name: 'High Intensity Interval Training(HIIT) - Advanced', video_url: 'https://www.youtube.com/watch?v=M0uO8X3_tEA') cardio
wo45 = Workout.create(name: 'Wood Chop', video_url: 'https://www.youtube.com/watch?v=b65s5BtdOEc') back
wo46 = Workout.create(name: 'Reverse Crunch', video_url: 'https://www.youtube.com/watch?v=hyv14e2QDq0') abs
wo47 = Workout.create(name: 'Mini Band Kickback', video_url: 'https://www.youtube.com/watch?v=stWFqxmJndQ') legs
wo48 = Workout.create(name: 'Dip', video_url: 'https://www.youtube.com/watch?v=0326dy_-CzM') chest
wo49 = Workout.create(name: 'Squat Jumps', video_url: 'https://www.youtube.com/watch?v=CVaEhXotL7M') cardio
wo50 = Workout.create(name: 'Barbell deadlift', video_url: 'https://www.youtube.com/watch?v=3UwO0fKukRw') back

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
tm11 = TargetMuscle.create(muscle_group_id: mg1.id, workout_id: wo11.id)
tm12 = TargetMuscle.create(muscle_group_id: mg3.id, workout_id: wo12.id)
tm13 = TargetMuscle.create(muscle_group_id: mg4.id, workout_id: wo13.id)
tm14 = TargetMuscle.create(muscle_group_id: mg5.id, workout_id: wo14.id)
tm15 = TargetMuscle.create(muscle_group_id: mg2.id, workout_id: wo15.id)
tm16 = TargetMuscle.create(muscle_group_id: mg1.id, workout_id: wo16.id)
tm17 = TargetMuscle.create(muscle_group_id: mg3.id, workout_id: wo17.id)
tm18 = TargetMuscle.create(muscle_group_id: mg4.id, workout_id: wo18.id)
tm19 = TargetMuscle.create(muscle_group_id: mg5.id, workout_id: wo19.id)
tm20 = TargetMuscle.create(muscle_group_id: mg2.id, workout_id: wo20.id)
tm21 = TargetMuscle.create(muscle_group_id: mg1.id, workout_id: wo21.id)
tm22 = TargetMuscle.create(muscle_group_id: mg3.id, workout_id: wo22.id)
tm23 = TargetMuscle.create(muscle_group_id: mg4.id, workout_id: wo23.id)
tm24 = TargetMuscle.create(muscle_group_id: mg5.id, workout_id: wo24.id)
tm25 = TargetMuscle.create(muscle_group_id: mg2.id, workout_id: wo25.id)
tm26 = TargetMuscle.create(muscle_group_id: mg1.id, workout_id: wo26.id)
tm27 = TargetMuscle.create(muscle_group_id: mg3.id, workout_id: wo27.id)
tm28 = TargetMuscle.create(muscle_group_id: mg4.id, workout_id: wo28.id)
tm29 = TargetMuscle.create(muscle_group_id: mg5.id, workout_id: wo29.id)
tm30 = TargetMuscle.create(muscle_group_id: mg2.id, workout_id: wo30.id)
tm31 = TargetMuscle.create(muscle_group_id: mg1.id, workout_id: wo31.id)
tm32 = TargetMuscle.create(muscle_group_id: mg3.id, workout_id: wo32.id)
tm33 = TargetMuscle.create(muscle_group_id: mg4.id, workout_id: wo33.id)
tm34 = TargetMuscle.create(muscle_group_id: mg5.id, workout_id: wo34.id)
tm35 = TargetMuscle.create(muscle_group_id: mg2.id, workout_id: wo35.id)
tm36 = TargetMuscle.create(muscle_group_id: mg1.id, workout_id: wo36.id)
tm37 = TargetMuscle.create(muscle_group_id: mg3.id, workout_id: wo37.id)
tm38 = TargetMuscle.create(muscle_group_id: mg4.id, workout_id: wo38.id)
tm39 = TargetMuscle.create(muscle_group_id: mg5.id, workout_id: wo39.id)
tm40 = TargetMuscle.create(muscle_group_id: mg2.id, workout_id: wo40.id)
tm41 = TargetMuscle.create(muscle_group_id: mg1.id, workout_id: wo41.id)
tm42 = TargetMuscle.create(muscle_group_id: mg3.id, workout_id: wo42.id)
tm43 = TargetMuscle.create(muscle_group_id: mg4.id, workout_id: wo43.id)
tm44 = TargetMuscle.create(muscle_group_id: mg5.id, workout_id: wo44.id)
tm45 = TargetMuscle.create(muscle_group_id: mg2.id, workout_id: wo45.id)
tm46 = TargetMuscle.create(muscle_group_id: mg1.id, workout_id: wo46.id)
tm47 = TargetMuscle.create(muscle_group_id: mg3.id, workout_id: wo47.id)
tm48 = TargetMuscle.create(muscle_group_id: mg4.id, workout_id: wo48.id)
tm49 = TargetMuscle.create(muscle_group_id: mg5.id, workout_id: wo49.id)
tm50 = TargetMuscle.create(muscle_group_id: mg2.id, workout_id: wo50.id)





puts "Seeding complete"
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

# 5.times do
#     User.create(
#     email: Faker::Internet.email,
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     password: Faker::Internet.password
#   )
# end

w1 = SavedWorkout.create(back_workout: 'Flyaways', chest_workout: 'Bench Press', abs_workout: 'Russian Twists', legs_workout: 'Squats', cardio_workout: 'Burpees', user_id: u1.id)

puts "Seeding complete"

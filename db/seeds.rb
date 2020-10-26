# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Beer.create(brand: 'Double Stout', style: 'Stout', country: 'England', quantity: 54)
Beer.create(brand: 'Spaten', style: 'Helles', country: 'Germany', quantity: 3)
Beer.create(brand: 'Newcastle', style: 'Brown ale', country: 'UK', quantity: 12)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Creating users..."

User.create(
    username: "weasel",
    password: "123", 
    full_name: "weasel b",
    email: "weasel@hotmail.com"
)

User.create(
    username: "margot",
    password: "123", 
    full_name: "margot h",
    email: "margot@hotmail.com"
)

User.create(
    username: "k-pup",
    password: "123", 
    full_name: "k-pup m",
    email: "kpuphotmail.com"
)

User.create(
    username: "pippin",
    password: "123", 
    full_name: "pippin h-n",
    email: "pippin@hotmail.com"
)

User.create(
    username: "clicquot",
    password: "123", 
    full_name: "clicquot cat",
    email: "clicquot@hotmail.com"
)

puts "Creating reviews..."

reviews = JSON.parse(File.read(Rails.root.join('./db/reviews.json')))

reviews.each do |review|
    Review.create(
        reviewer: review['reviewer'],
        date_reviewed: review['date_reviewed'], 
        star_rating: review['star_rating'], 
        message: review['message'],
        order_id: review['order_id']
    )
end

puts "✅ Done seeding!"
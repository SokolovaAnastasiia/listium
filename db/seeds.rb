# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
posts = [
{
	name: "1",
	title: "The Bad Seeds",
	content: "Nick Cave",
	link: "Tracklist"
},
{
	name: "2",
	title: "The Bad Seeds Old",
	content: "Nick Cave Old Too",
	link: "Some Old Tracklist"
},
{
    name: "3",
    title: "The Bad Seeds new",
    content: "Nick Cave Old Too",
    link: "Some Old Tracklist"
}
]


posts.each do |post|
	postik = Post.create(post)
	puts "Some magic just create a #{ postik.name } with id #{ postik.id }!"
end

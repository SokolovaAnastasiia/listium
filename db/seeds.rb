# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

# posts = [
# {
# 	name: "Сергей",
# 	title: "Утренняя пробежка",
# 	content: "Этот плейлист я создал когда начал заниматься спортом. На дворе лето 2022 года. Я много бегал. Музыка помогала мне держать темп. Предлагаю и вам разделить эти моменты с классной музыкой.",
# 	link: "https://www.apple.com/ru/apple-music/"
# },
# {
# 	name: "Ксения",
# 	title: "Новогоднее настроние",
# 	content: "Этот плейлист я создала когда сидела за праздничным столом. На дворе зима 2019 года. Музыкальный плейлист скрасил мои семейные праздники. Предлагаю и вам разделить эти моменты с классной музыкой.",
# 	link: "https://www.spotify.com/ru/spotify-music/"
# },
# {
#     name: "Владимир",
#     title: "Подготовка к экзаменам",
#     content: "Этот плейлист я создал когда сдавал сессию. На дворе весна 2020 года. Музыкальный плейлист помог мне организовать себя и зарядил позитивом. Предлагаю и вам разделить эти моменты с классной музыкой.",
#     link: "https://www.yandexmusic.ru/ru/yandex-music/"
# },
# {
#     name: "Евгений",
#     title: "Люк Скайуокер",
#     content: "Этот плейлист я создал когда смотрел 4 серию Звездных Войн. Моня очень вдохновили события в фильме. В особенности саунтреки. Именно такая атмосфера сподвигла меня создать этот плейлист. Предлагаю и вам разделить эти моменты с классной музыкой.",
#     link: "https://www.apple.com/ru/apple-music/"
# }
# ]

# posts = [
# {
# 	name: "user1",
# 	title: "Подготовка к экзаменам2",
#   user_id: 1,
# 	content: "Этот плейлист я создал когда сдавал сессию. На дворе весна 2020 года. Музыкальный плейлист помог мне организовать себя и зарядил позитивом. Предлагаю и вам разделить эти моменты с классной музыкой.",
#   category_id: 1,
#   image: URI.open("https://in-sound.ru/upload/iblock/d85/d859aa8387fd5fcd7a933be2af91066b.jpg")
# }
# ]
#
# posts.each do |post|
# 	postik = Post.create(post)
# 	puts "Some magic just create a #{ postik.name } with id #{ postik.id }!"
# end



Post.destroy_all

puts "Destroyed everything you touch"

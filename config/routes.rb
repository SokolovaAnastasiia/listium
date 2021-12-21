Rails.application.routes.draw do
  get 'admin/index'
  get 'admin', to: 'admin#index'

  resources :follows
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  get 'about/index'
  get 'promo/index'
  resources :subscribers
  resources :posts do
    resources :comments
    resources :likes
    resources :favorites
  end

  resources :users
  post 'users/:id/follow', to: "users#follow", as: "follow_user"
  post 'users/:id/unfollow', to: "users#unfollow", as: "unfollow_user"

  get 'users/:id/following', :to => "users#following", :as => :following

  get 'post/index'
  get 'welcome/index'
  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show'
  delete 'users/:id', to: 'users#destroy'

  get 'posts/:id', to: 'posts#show'

  get 'comments', to: 'comments#index'
  get 'comments/:id', to: 'comments#show'


  root 'posts#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root 'promo#index'
end

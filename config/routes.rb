Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  get 'about/index'
  get 'promo/index'
  resources :subscribers
  resources :posts do
      resources :comments
  end
  get 'post/index'
  get 'welcome/index'
  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'promo#index'
end

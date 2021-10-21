Rails.application.routes.draw do
  resources :posts do
      resources :comments
  end
  get 'post/index'
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'posts#index'
end

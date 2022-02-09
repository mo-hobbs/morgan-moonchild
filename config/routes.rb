Rails.application.routes.draw do
  resources :products, only: [:index, :show]
  resources :reviews, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :destroy]
  resources :order_items, only: [:index, :show]
  resources :orders, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "products#index"

  #from https://learning.flatironschool.com/courses/4552/pages/authenticating-users?module_item_id=346173 
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  get '*path', 
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  
end

Rails.application.routes.draw do
  resources :contacts, only: [:index, :show, :create]
  resources :products, only: [:index, :show]
  resources :reviews, only: [:index, :show, :render_reviews]
  resources :users, only: [:index, :show, :create, :destroy]
  resources :order_items, only: [:index, :show]
  resources :orders, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "products#index"

  #from https://learning.flatironschool.com/courses/4552/pages/authenticating-users?module_item_id=346173 
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get '/testimonials', to: "reviews#render_reviews"
  get '/shop', to: "products#show"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  get '*path', 
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  
end

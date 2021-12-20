Rails.application.routes.draw do
  resources :jobs
  resources :properties
  resources :users, only: [:show, :create]


  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :properties
  resources :users


  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

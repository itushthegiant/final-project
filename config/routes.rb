Rails.application.routes.draw do
  resources :jobs
  resources :properties
  resources :users, only: [:show, :create]

  # delete "/jobs/:id/delete-images", to: "jobs#image_delete"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  patch "/jobs/:id/upload-images", to: "jobs#update_images"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

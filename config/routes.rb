Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :items, only: [:index, :show]
    resources :materials, only: [:index, :show]
    resources :categories, only: [:index, :show]
    resources :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :update, :destroy]
  end

  namespace :admin, defaults: { format: :json } do
    resources :items, only: [:create, :update, :destroy]
    resources :materials, only: [:create, :update, :destroy]
    resources :categories, only: [:create, :update, :destroy]
    resources :sessions, only: [:create, :destroy]
  end
end

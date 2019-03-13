Rails.application.routes.draw do
  namespace :api do
    resources :items, only: [:index, :show]
    resources :materials, only: [:index, :show]
    resources :categories, only: [:index, :show]
  end

  namespace :admin do
    resources :items, only: [:create, :update, :destroy]
    resources :materials, only: [:update, :destroy]
    resources :categories, only: [:update, :destroy]
  end
end

Rails.application.routes.draw do
  root 'homes#index'

  resources :scores
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

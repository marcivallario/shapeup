Rails.application.routes.draw do
  resources :muscle_groups, only: [:index]
  resources :saved_workouts
  post '/users', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/auth', to: 'users#show'
  get '/abs', to: 'muscle_groups#abs'
  get '/back', to: 'muscle_groups#back'
  get '/chest', to: 'muscle_groups#chest'
  get '/legs', to: 'muscle_groups#legs'
  get '/cardio', to: 'muscle_groups#cardio'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

class Admin::SessionsController < ApplicationController
  def create
    admin = Admin.where(email:params[:email]).first
    binding.pry
    if admin&.valid_password?(params[:password])
      render json: admin.as_json(only: [:email, :authentication_token]), status: :created
    else
      head(:unauthorized)
    end
  end

  def destroy
    
  end
end

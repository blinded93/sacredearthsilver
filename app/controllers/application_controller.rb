class ApplicationController < ActionController::API
  # include Devise::Controllers::Helpers
  acts_as_token_authentication_handler_for User, fallback: :none
  acts_as_token_authentication_handler_for Admin, fallback: :none

  private

    def after_successful_token_authentication
      renew_authentication_token!
    end
end
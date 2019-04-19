class Api::CategoriesController < ApplicationController
  def index
    categories = Api::CategorySerializer.new(Category.all)

    render json: categories,
           status: 200
  end
end

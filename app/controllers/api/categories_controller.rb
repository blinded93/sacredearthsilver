class Api::CategoriesController < ApplicationController
  def index
    categories = Api::CategorySerializer.new(Category.includes(:items))
    
    render json: categories,
           status: 200
  end

  def show
    category = Api::CategorySerializer.new(Category.where(id:params[:id]))
    
    render json: category,
           status: 200
  end
end

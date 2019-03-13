class Api::ItemsController < ApplicationController
  def index
    items = Api::ItemSerializer.new(Item.includes(:categories, :materials))

    render json: items,
           status: 200
  end

  def show
    item = Item.where(id:params[:id])

    render json: Api::ItemSerializer.new(item),
           status: 200
  end
end

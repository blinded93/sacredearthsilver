class Api::MaterialsController < ApplicationController
  def index
    materials = Api::MaterialSerializer.new(Material.includes(:items))
    
    render json: materials,
           status: 200
  end

  def show
    material = Api::MaterialSerializer.new(Material.where(id:params[:id]))

    render json: material,
           status: 200
  end
end

class Api::ItemSerializer
  include FastJsonapi::ObjectSerializer

  has_many :categories
  has_many :materials

  attributes :name, :price, :description, :adjustable, :recycled, :image, :customizable, :status, :created_at, :updated_at, :size, :categories, :materials
end

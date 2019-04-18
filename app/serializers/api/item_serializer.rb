class Api::ItemSerializer
  include FastJsonapi::ObjectSerializer

  belongs_to :category
  has_many :materials

  attributes :name, :price, :description, :adjustable, :recycled, :image, :customizable, :status, :created_at, :updated_at, :size, :category, :materials
end

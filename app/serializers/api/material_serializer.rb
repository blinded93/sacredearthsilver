class Api::MaterialSerializer
  include FastJsonapi::ObjectSerializer

  has_many :items

  attributes :name, :image, :items
end

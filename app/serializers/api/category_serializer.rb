class Api::CategorySerializer
  include FastJsonapi::ObjectSerializer
  
  # has_many :items, serializer: Api::ItemThumbSerializer
  
  attributes :name
end

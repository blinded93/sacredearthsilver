class Item < ApplicationRecord
  belongs_to :category
  has_many :item_materials
  has_many :materials, through: :item_materials
  
  has_many :orders
  has_many :order, through: :order_items
end

class Item < ApplicationRecord
  has_many :item_categories
  has_many :categories, through: :item_categories
  has_many :item_materials
  has_many :materials, through: :item_materials
end

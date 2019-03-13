class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.boolean :adjustable
      t.boolean :customizable
      t.boolean :recycled
      t.string :image
      t.string :status

      t.timestamps
    end
  end
end

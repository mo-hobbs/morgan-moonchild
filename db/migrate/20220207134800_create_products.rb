class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :product_title
      t.string :product_subtitle
      t.text :description
      t.integer :price
      t.string :currency_code
      t.integer :quantity
      t.string :tags
      t.string :materials
      t.string :image1
      t.string :image2
      t.string :image3
      t.string :image4
      t.string :image5
      t.string :image6
      t.string :image7
      t.string :image8
      t.string :image9
      t.string :image10
      t.string :sku
      t.string :category
      t.boolean :status
      t.string :square_url
      t.timestamps
    end
  end
end

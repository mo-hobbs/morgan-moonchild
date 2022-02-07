class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :reviewer
      t.datetime :date_reviewed
      t.integer :star_rating
      t.text :message
      t.integer :order_id

      t.timestamps
    end
  end
end

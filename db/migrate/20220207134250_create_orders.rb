class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.boolean :status

      t.timestamps
    end
  end
end

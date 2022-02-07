class Order < ApplicationRecord
  belongs_to :user_id
  has_many :order_items
  has_many :products, through: :order_items
  has_one :user_id
end

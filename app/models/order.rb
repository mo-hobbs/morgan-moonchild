class Order < ApplicationRecord
  has_one :user
  has_many :order_items
  has_many :products, through: :order_items
end

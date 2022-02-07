class User < ApplicationRecord
    has_many :orders
    has_many :order_items, through: :orders 

    validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 30 }
end

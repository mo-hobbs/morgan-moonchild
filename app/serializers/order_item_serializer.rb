class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :order_id
  has_one :product_id
end

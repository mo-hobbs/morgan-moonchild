class OrderSerializer < ActiveModel::Serializer
  attributes :id, :status
  has_one :user_id
end

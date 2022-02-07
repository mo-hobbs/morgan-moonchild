class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :reviewer, :date_reviewed, :star_rating, :message, :order_id
end

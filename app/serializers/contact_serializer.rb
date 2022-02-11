class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :inquiry_type, :message
end

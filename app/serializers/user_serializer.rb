class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :full_name, :email

  has_many :contacts
end

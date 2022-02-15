class ProductSerializer < ActiveModel::Serializer
  attributes :id, :product_title, :product_subtitle, :description, :price, :currency_code, :quantity, :tags, :materials, :image1, :image2, :image3, :image4, :image5, :image6, :image7, :image8, :image9, :image10, :sku, :category, :status, :square_url
end

namespace :products do
  desc "This task will import products from excel sheet and insert them in products table"
  task import: :environment do
    sheet = Roo::Spreadsheet.open('./db/products-20220215-3.csv')


    (2..sheet.last_row).each do |row|
      record = sheet.row(row)
      
      product = Product.create(product_title: record[0], product_subtitle: record[1],	description: record[2],	price: record[3],	currency_code: record[4],	quantity: record[5],	tags: record[6],	materials: record[7],	image1: record[8],	image2: record[9],	image3: record[10],	image4: record[11],	image5: record[12],	image6: record[13],	image7: record[14],	image8: record[15],	image9: record[16],	image10: record[17], sku: record[18], category: record[19],	status: record[20], square_url: record[21])
      puts product.product_title
    end
  end

end
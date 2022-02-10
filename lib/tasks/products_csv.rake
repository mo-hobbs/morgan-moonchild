namespace :products do
    desc "This task will import products from excel sheet and insert them in products table"
    task import: :environment do
      sheet = Roo::Spreadsheet.open('./db/malas-data-20220207.csv')
  
  
      (2..sheet.last_row).each do |row|
        record = sheet.row(row)
        
        product = Product.create(product_title: record[0],	description: record[1],	price: record[2],	currency_code: record[3],	quantity: record[4],	tags: record[5],	materials: record[6],	image1: record[7],	image2: record[8],	image3: record[9],	image4: record[10],	image5: record[11],	image6: record[12],	image7: record[13],	image8: record[14],	image9: record[15],	image10: record[16], sku: record[17],	status: record[18])
        puts product.product_title
      end
    end
  
  end
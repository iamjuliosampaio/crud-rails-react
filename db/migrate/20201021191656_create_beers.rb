class CreateBeers < ActiveRecord::Migration[5.0]
  def change
    create_table :beers do |t|
      t.string :brand
      t.string :style
      t.string :country
      t.integer :quantity

      t.timestamps
    end
  end
end

class BlockUsers < ActiveRecord::Migration[6.1]
    def change
      add_column :users, :isblocked, :boolean, :default => false
    end
end

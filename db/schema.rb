# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160809062538) do

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "location_id"
  end

  add_index "categories", ["location_id"], name: "index_location_id"

  create_table "industries", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.string   "contact"
    t.integer  "locations_id"
    t.integer  "categories_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "industries", ["categories_id"], name: "index_industries_on_categories_id"
  add_index "industries", ["locations_id"], name: "index_industries_on_locations_id"

  create_table "locations", force: :cascade do |t|
    t.string   "name"
    t.string   "district"
    t.string   "state"
    t.integer  "pincode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

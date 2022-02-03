const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Oshop_schema = new Schema
(
    {
        iod:
        {
            type:String,
            required:true
        },
        Name:
        {
            type:String,
            required:true
        },
        Location:
        {
            type:String,
            required:true
        },
        Brand:
        {
            type:String,
            required:true
        },
        Shop_info:
        {
            type:String,
            required:true
        },
        Estimated_prices:
        {
            type:String,
            required:true
        }
    }
)


const Shop = mongoose.model('official',{Oshop_schema});
module.exports = Shop;

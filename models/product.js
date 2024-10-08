const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }, 
    price : {
        type: Number,
        default:0
    },
    image: {
        type: String,
        default: ''
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'category'
    },
 
    dateCreated: {
        type: Date,
        required: true
        
    },

})
  
const product = mongoose.model('product', productSchema);

module.exports = product 
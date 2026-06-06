const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    catagory: {
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    description: { 
        type: String, 
        required: true 
    },
    newPrice: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    oldPrice: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    image: { 
        type: String, 
        required: true 
    }, // URL path to the product image
    rating: { 
        type: Number, 
        default: 0 
    }

}, { 
    timestamps: true 

}); 

module.exports = mongoose.model('Product', productSchema);
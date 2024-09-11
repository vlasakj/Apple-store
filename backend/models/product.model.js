import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        required: true,
    },

}, 
{
    timestamps: true // createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);
// products is the name of the collection in the database
// Product is the model that we will use to interact with the database

export default Product;
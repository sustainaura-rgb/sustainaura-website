import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    color: String,
    dimensions: String,
    material: String,
    category: String,
    link: String,
});

// Prevent overwrite of existing model if it's already compiled
const Product = mongoose.models.Product || mongoose.model('Product', productSchema, 'products');

export default Product;

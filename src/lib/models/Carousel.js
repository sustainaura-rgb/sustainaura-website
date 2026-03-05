import mongoose from 'mongoose';

const carouselSchema = new mongoose.Schema({
    title: String,
    image: String,
    path: String,
});

// Prevent overwrite of existing model if it's already compiled
const Carousel = mongoose.models.Carousel || mongoose.model('Carousel', carouselSchema, 'carousels');

export default Carousel;

import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }, // required canonical field
    inquiry: { type: String },                  // optional (frontend uses this)
    createdAt: { type: Date, default: Date.now },
    emailSent: { type: Boolean, default: false },
    emailError: { type: String, default: null },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

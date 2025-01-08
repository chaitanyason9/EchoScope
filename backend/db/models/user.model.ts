import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 20,
    },
    email: {
        type: String,
        required: true,
        unique:  true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
});

const User = mongoose.model('User', userSchema);

export default User;
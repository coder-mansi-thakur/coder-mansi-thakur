import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please Provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please Provide a email"],
        unique: true,
    },
    password: { type: String, required: [true, "Please Provide a password"] },
    isVerified: { type: Boolean, default: false },
    forgotPasswordToken: { type: String },
    forgotPasswordTokenExpiry: { type: Date },
    verifyToken: { type: String },
    verifyTokenExpiry: { type: Date },
});

const User = mongoose.model.users || mongoose.model("users", UserSchema);

export default User;

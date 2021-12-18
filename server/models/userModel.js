import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 6},
    role: {type: String, default: "client"},
    id:{ type: String },
});

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;

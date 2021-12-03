import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 6},
    firstName: {type: Map, of: String, required: true},
    lastName: {type: Map, of: String, required: true},
    role: {type: String, default: "client"},
    id:{ type: String },
});

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;

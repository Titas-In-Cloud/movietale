import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/userModel.js";

/**
 * Compares the user login details with details in the database and creates a new JSON Web Token.
 *
 * @param   req HTTP request body.
 * @param   res HTTP response body.
 * @returns {Promise<*>} HTTP response either with existing user information and JSON Web Token, or error message.
 */
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // checks if the user exists in the database.
        const existingUser = await UserModel.findOne({ email });
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        // checks if the request password is the same as the one saved in the database.
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid password." })

        // creates JSON Web Token which expires in 1 hour.
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "private-key", { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

/**
 * Registers a new user to the database and creates a new JSON Web Token.
 *
 * @param   req HTTP request body.
 * @param   res HTTP response body.
 * @returns {Promise<*>} HTTP response either with newly created user information and jwt token, or error message.
 */
export const register = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        // checks if the user exists in the database.
        const existingUser = await UserModel.findOne({ email });
        if(existingUser) return res.status(401).json({ message: "User already exists." });

        // checks if the password and confirm password fields have the same information.
        if(password !== confirmPassword) return res.status(409).json({ message: "Passwords don't match" });

        if(password.length < 6) return res.status(400).json({ message: "Password should be minimum 6 characters" })

        const hashedPassword = await bcrypt.hash(password, 12);

        // creates a new user in the database
        const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        // creates JSON Web Token which expires in 1 hour.
        const token = jwt.sign({ email: result.email, id: result._id }, "private-key", { expiresIn: "1h" });

        res.status(200).json({ result: result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

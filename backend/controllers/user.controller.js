import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register a new user
export const register = async (req, res) => {
    try {
        // User input
        const { fullname, email, password } = req.body;

        // Check if all fields are provided
        if (!fullname || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }

        // Check if a user with the given email already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: "User already exists with this email",
                success: false,
            });
        }

        // Hash the password securely
        const hashPassword = await bcrypt.hash(password, 10);

        // Create the user in the database
        await User.create({
            fullname,
            email,
            password: hashPassword,
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true,
        });
    } catch (error) {
        console.error("Error in user registration:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

//Login
export const login = async (req, res) => {
    try {
        //user input
        const { email, password } = req.body;

        //validate all fields
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }

        //check user email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false,
            });
        }

        //validate  password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false,
            });
        }

        //Token create and expire
        const tokenData = {
            userId: user._id,
        };
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
            expiresIn: "1d",
        });

        //Cookie
        return res
            .status(200)
            .cookie("token", token, {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: true,
            })
            .json({
                message: `Welcome back ${user.fullname}`,
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
                success: true,
            });
    } catch (error) {
        console.log("Error in user login", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

//logout
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "User Logged Out Successfully",
            success: true,
        });
    } catch (error) {
        console.log("Error in User Logout", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

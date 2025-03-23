import express from "express";
import connectDB from "./database/db.js";
import userRoutes from "./routes/user.route.js";
import influencer from "./routes/influencerRoutes.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 8000;

// Middleware
app.use(cookieParser());
app.use(express.json()); // Body parser

//api routes
app.use("/api/user", userRoutes); // User routes
app.use("/api/getInfluencer", influencer); // Influencer routes
app.use("/api/addInfluencer", influencer); // add Influencer routes
app.use("/api/deleteInfluencer", influencer); //delete  Influencer routes

// Basic route
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// Start server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});

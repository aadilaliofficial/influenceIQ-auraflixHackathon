import mongoose from "mongoose";

const InfluencerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    credibilityScore: { type: Number, default: 0 },
    longevityScore: { type: Number, default: 0 },
    engagementScore: { type: Number, default: 0 },
    followers: { type: Number, required: true },
    image: { type: String, required: true },
});

const Influencer = mongoose.model("Influencer", InfluencerSchema);
export default Influencer;

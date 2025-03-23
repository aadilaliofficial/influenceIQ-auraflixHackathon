import Influencer from "../models/Influencer.js";

export const getInfluencers = async (req, res) => {
    try {
        const influencers = await Influencer.find();
        res.json(influencers);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

export const addInfluencer = async (req, res) => {
    const {
        name,
        category,
        credibilityScore,
        longevityScore,
        engagementScore,
        followers,
        image,
    } = req.body;
    try {
        const newInfluencer = new Influencer({
            name,
            category,
            credibilityScore,
            longevityScore,
            engagementScore,
            followers,
            image,
        });
        await newInfluencer.save();
        res.json(newInfluencer);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

export const deleteInfluencer = async (req, res) => {
    try {
        await Influencer.findByIdAndDelete(req.params.id);
        res.json({ msg: "Influencer deleted" });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

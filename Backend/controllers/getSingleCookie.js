import { Link } from "../models/link.js";

export const getSingleCookie = async (req, res) => {
    const itemId = req.params.id;
    const obj = await Link.findOne({ itemId });

    if (!obj) {
        return res.status(404).json({ message: "Link not found" }); // Handle not found case  
    }
    const link = obj.link;
    res.redirect(link);
};
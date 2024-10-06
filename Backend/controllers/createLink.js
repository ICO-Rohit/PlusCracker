import { Link } from "../models/link.js";

export const createLink = async (req, res) => {
    const link = req.body.link;
    const itemId = req.params.id;
    if (!itemId || !link) {
        return res.status(400).json({ message: "itemId and Link are required." });
    }

    // Create a new link document  
    const newLink = new Link({
        itemId: itemId.toString(), // Ensure itemId is a string  
        link: link
    });

    // Save the document to the database  
    await newLink.save();

    // Respond with the created link document  
    return res.status(201).json(newLink);
}
import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        itemId: {
            type: String,
            required: true,
            unique: true
        },
        link: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const Link = mongoose.model("Link", schema);

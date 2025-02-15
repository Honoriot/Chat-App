import mongoose, { Types } from "mongoose";
import { boolean } from '@storybook/addon-knobs';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    groupChat: {
        type: boolean,
        default: false
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]
}, {
    timestamps: true
});

const chatModel = mongoose.model("chat", schema);

export default chatModel
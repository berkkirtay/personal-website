const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "true"
    },
    content:
        [{
            type: String
        }],
    date: {
        type: String,
        required: "true"
    }
});

mongoose.model("Blog", blogSchema);

module.exports = {
    mongoose: mongoose,
}
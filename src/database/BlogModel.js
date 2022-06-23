const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "true"
    },
    shortContent: {
        type: String,
        required: "true"
    }
    ,
    date: {
        type: String,
        required: "true"
    }
});

mongoose.model("Blog", blogSchema);

module.exports = {
    mongoose: mongoose,
}
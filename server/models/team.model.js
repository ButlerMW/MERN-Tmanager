const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {type: String,
        required: [
            true,
            "name is required"
        ],
        minlength: [2,
        "Must have a min length of 2"]
    },
    position: {type: String},
    status: {
        game1: {type: Number},
        game2: {type: Number},
        game3: {type: Number}} 
}, { timestamps: true});
module.exports.Team = mongoose.model('Team', TeamSchema);
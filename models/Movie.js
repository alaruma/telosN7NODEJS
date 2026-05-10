
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true // 
    },
    description: { 
        type: String, 
        required: true 
    },
    year: { 
        type: Number, 
        required: true 
    },
    genres: { 
        type: [String], 
        required: true 
    },
    image: { 
        type: String, 
        required: false 
    },
    video: { 
        type: String, 
        required: false
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('Movie', MovieSchema);
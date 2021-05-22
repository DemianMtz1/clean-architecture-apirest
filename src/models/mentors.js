const mongoose = require('mongoose');

// schema
const mentorsSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        required: true
    },
    lastName: {
        type: String,
        minLength: 2,
        required: true
    },
    age: {
        type: Number, 
        min: 0,
        max: 2000,
        required: true
    },
    gender: {
        type: String,
        enum: ['f', 'm'],
        required: true
    },
    modulo: {
        type: String,
        enum: [ 'front', 'back', 'cloud', 'react' ],
        required: true
  }
})

// model
const Mentor = mongoose.model('mentors', mentorsSchema);

module.exports = Mentor;

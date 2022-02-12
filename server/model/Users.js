const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    }, 
    ID: {
        type: String,
        required: false
    },
    IP: {
        type: String,
        required: false
    },
    Phone : {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('USERS', usersSchema)
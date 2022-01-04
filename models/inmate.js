const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InmateSchema = Schema({
    fullName: { type: String},
    phone: { type: String},
    email: { type: String},
    image: { type: String, default: '1.jpg' },
    address: {type: String},
    dob: {type: String},
    occupation: {type: String},
    offence: [{type: Object, default: null}],
    visitor: [{type: Object, default: null}]
}, { timestamps: true });

const Inmate = mongoose.model('inmate', InmateSchema)
module.exports = Inmate;
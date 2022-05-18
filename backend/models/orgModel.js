const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstname: String,
    lastname: String,
    organisationname: String,
    registeredaddress: String,
    state: String,
    city: String,
    postalcode: String,
    email: String,
    link: String,
})

const model = mongoose.model('organisation', schema);

module.exports = model;
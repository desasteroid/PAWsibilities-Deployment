const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, unique: true},
    password: {type: String, required:true ,minlength: 5},
    name: {type: String},
    email: {type: String, required:true, unique: true},
    address: {type: String},
    city: {type: String},
    phone_number: {type: String}
});
const User = mongoose.model('User',userSchema);
module.exports = User;
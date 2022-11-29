const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adoptionSchema = new Schema({
    username:{type:String,required:true},
    name:{type:String,required:true},
    phone_number:{type:String,required:true},
    address:{type:String,required:true},
    petname: {type: String},
    category: {type: String},
    age: {type: String},
    description: {type: String},
    kind: {type: String},
    
});
const Adoption = mongoose.model('Adoption',adoptionSchema);
module.exports = Adoption;
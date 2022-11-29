const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    firstname: {type: String},
    lastname: {type: String},
    think: {type: String},
    improve: {type: String},
    suggestion: {type: String}
});
const Review = mongoose.model('Review',ReviewSchema);
module.exports = Review;
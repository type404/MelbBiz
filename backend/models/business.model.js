const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const businessSchema = new Schema ( {
    censusYear = {type: Number, required: true},
     blockID = {type: Number, required: true},
     propertyID = {type: Number, required: true},
     basePropertyID = {type: Number, required: true},
     smallArea = {type: String, required: true},
     tradingName = {type: String, required: true},
     industryCode = {type: Number, required: true},
     industryDesc = {type: String, required: true},
     xCoord = {type: Number , required: true},
     yCoord = {type: Number, required: true},

})
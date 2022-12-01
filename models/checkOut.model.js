const mongoose = require('mongoose')
const Schema = mongoose.Schema

const checkOutSchema =  new Schema (
    {
        fullName: {type: String,  required : true},
        phoneNumber: {type: Number,  required : true},
        email: {type: String,  required : true},
        label: {type: String, required: true},
        address: {type: String,  required : true},
        address2: {type: String,  required : true},
        city:{type: String,  required : true},
        state: {type: String,  required : true},
        zipCode: {type: Number,  required : true},
        textArea: { type : String, max : [127, "Max Length is 127 characters"] },
        cardName:{type: String,  required : true},
        cardNumber: {type: Number,  required : true},
        expiration: {type: Date,  required : true},
        cvc: {type: Number,  required : true},

    }
)


const CheckOut = mongoose.model('CheckOut' , checkOutSchema)
module.exports = CheckOut
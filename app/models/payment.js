const mongoose = require("../../database")

const PaymentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Payment = mongoose.model("Payment", PaymentSchema)

module.exports = Payment
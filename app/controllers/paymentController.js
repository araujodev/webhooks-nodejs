const express = require("express")
const Payment = require('../models/payment')
const webhooks = require('node-webhooks');

const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const paymentsList = await Payment.find({})
        return res.send({ data: paymentsList })
    } catch (err) {
        return res.status(400).send({ message: "payment list failed", error: err })
    }
})

router.post("/", async(req, res) => {
    try {
        const payment = await Payment.create(req.body)
        if(payment){
            const hooks = registerHooks();
            hooks.trigger('callback_hook', { msg: "new payment created", data: payment});
        }
        return res.send({ payment })
    } catch (err) {
        return res.status(400).send({ message: "payment create failed", error: err })
    }
})

const registerHooks = () => {
    return new webhooks({
        db: {
            'callback_hook': ['http://localhost:8005/webhook-client']
        }
    });
}

module.exports = (app) => app.use("/payments", router)
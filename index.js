const express = require('express');
const bodyParser = require('body-parser');
const webhooks = require('node-webhooks');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const hooks = new webhooks({
    db: {
        'callback_hook': ['http://localhost:9000/callback']
    }
});

app.get('/', (req, res) => {
    hooks.trigger('callback_hook', { msg: "success trigged." });
    return res.status(200).send('Webhook Trigged.');
});

app.post('/callback', (req, res) => {
    console.log('Inside Callback hook', req.body)
    return res.status(200).end();
});

app.listen(9000, () => {
    console.log("Node-Webhook has been stated at: http://localhost:9000");
})
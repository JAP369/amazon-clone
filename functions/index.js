const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HSRfNC0PNwK11Bsg3gblX8F8PdMzToSx4AyEnma5sStFc1z2v4ens3mIEuk5gh0gFWPl48wH6Vm6Q6UwmLwN0mq00H7eFobkb'
);

// API SETUP

// - APP config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get('/', (request, response) =>
  response.status(200).send('this is the server side')
);

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved!!! for this amount >>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/cl-76b33/us-central1/api

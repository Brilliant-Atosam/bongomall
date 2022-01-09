const router = require('express').Router();
const stripe = require('stripe')(
  'sk_test_51Hsfe5BKUeVY4ighjvpAO0ZYz70jFnqwZuO8QkDVpSY0af6wQdgOTrDEHIMm7L3Up5zHSvc8MG5pyxHjvIk7Q77k00NYn4tLoY'
);
router.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'USD',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
        console.log(stripeErr);
      } else {
        res.status(200).json(stripeRes);
        console.log(stripeRes);
      }
    }
  );
});
module.exports = router;

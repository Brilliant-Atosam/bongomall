const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/products');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
require('dotenv').config();
mongoose
  .connect(process.env.MONGODB_URI_LOCAL)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err));
app.set('view engine', 'ejs');
app.use(cors())
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productsRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(process.env.PORT || 8000, () => console.log('Server is running'));

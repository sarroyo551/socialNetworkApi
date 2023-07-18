const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api').then(() => console.log('Connected to MongoDB'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',routes);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));


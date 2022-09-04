// Required
const express = require("express");

// Sets up the port.
const PORT = process.env.PORT || 3001;

// Express App
const app = express();

//Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Set up to handle data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
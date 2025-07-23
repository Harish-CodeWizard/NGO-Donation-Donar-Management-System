const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// TODO: Import routes here and use them
// const apiRoutes = require('./routes/api');
// app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);


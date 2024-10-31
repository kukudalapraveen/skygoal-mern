const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require('cors'); 

dotenv.config();
const app = express();
app.use(cors());
// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.use('/', (req, res) => {
    res.send(`Backend server running on port: ${PORT}`);
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

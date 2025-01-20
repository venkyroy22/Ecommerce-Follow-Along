const express = require('express');
const app = express();
const ErrorHandler = require('./middleware/error');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cookieParser()); // Invoke the cookieParser function
app.use(cors()); // Add configuration if needed
app.use("/", express.static("uploads")); // Serve static files
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// Environment variable configuration
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require("dotenv").config({
        path: "backend/config/.env" // Ensure this path is correct
    });
}

// Routes
const user = require("./controller/user");
app.use("/api/v2/user", user);

// Error handling middleware
app.use(ErrorHandler);

module.exports = app;
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { connect } = require("http2");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const job = require("./lib/cron");


const app = express();

//database connection
connectDB();



//middlewares
app.use(express.json());

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://spendly-frontend-pi.vercel.app"  
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],  
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);


app.get('/', (req, res) => {
  res.json({ 
    message: "Spendly Backend API is running successfully!",
    status: "active",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

//Routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/income",incomeRoutes);
app.use("/api/v1/expense",expenseRoutes);
app.use("/api/v1/dashboard",dashboardRoutes);

//server uploads folder
app.use("/uploads",express.static(path.join(__dirname,"uploads")));

// Start cron job (with verification)
if (job && typeof job.start === 'function') {
  console.log('Starting cron job...');
  job.start();
} else {
  console.error('Cron job initialization failed!');
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log(`Cron job next run: ${job.nextDate()}`);
});
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

const app = express();

// const corsOptions = {
//   origin: [
//     'http://localhost:5173',  // Vite dev server
//     'http://localhost:3000',  // React dev server (if using Create React App)
//     'http://localhost:5174',  // Alternative Vite port
//     'https://your-frontend-domain.com', // Add your deployed frontend URL here when you deploy
//   ],
//   credentials: true, // Allow cookies and authorization headers
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: [
//     'Content-Type', 
//     'Authorization', 
//     'X-Requested-With',
//     'Accept',
//     'Origin'
//   ],
// };

// Apply CORS middleware
// app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

//middleware to handle cors
app.use(express.json());

app.use(
  cors({
    origin:  "http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"],
  })
);

connectDB();

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/income",incomeRoutes);
app.use("/api/v1/expense",expenseRoutes);
app.use("/api/v1/dashboard",dashboardRoutes);

//server uploads folder
app.use("/uploads",express.static(path.join(__dirname,"uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => console.log(`server is running on port : ${PORT}`));
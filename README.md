
<div align="center">
   
[![Spendly Backend](./spendly-Banner.svg)](https://github.com/zenpai6996/Spendly-backend)

[![License](https://img.shields.io/github/license/zenpai6996/Spendly-backend?style=for-the-badge&color=6366f1&labelColor=1e293b)](https://github.com/zenpai6996/Spendly-backend/blob/main/LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18+-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

*A robust, scalable backend API for personal finance management*

[📚 **API Documentation**](./APIDOCS.md) • [🚀 **Getting Started**](#-quick-start) • [🤝 **Contributing**](#-contributing)

</div>

---

## ✨ Overview

Spendly Backend is a powerful REST API designed for modern finance tracking applications. Built with enterprise-grade architecture, it provides secure user management, transaction handling, and comprehensive financial analytics.

## 🎯 Key Features

<table>
<tr>
<td width="50%">

### 🔐 **Authentication & Security**
- JWT-based authentication
- Secure password hashing with bcrypt
- Protected route middleware
- Profile image upload support

### 📊 **Financial Management**
- Income & expense tracking
- Real-time dashboard analytics
- Historical transaction data
- Excel export functionality

</td>
<td width="50%">

### 🏗️ **Architecture**
- RESTful API design
- Modular Express.js structure
- MongoDB with Mongoose ODM
- Automated CRON jobs

### 📈 **Analytics**
- 30-day expense summaries
- 60-day income tracking
- Transaction categorization
- Balance calculations

</td>
</tr>
</table>

## 🛠️ Technology Stack

<div align="center">

| **Backend** | **Database** | **Authentication** | **Utils** |
|:-----------:|:------------:|:------------------:|:---------:|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white) | ![Multer](https://img.shields.io/badge/Multer-FF6B6B?style=for-the-badge) |
| ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | ![bcrypt](https://img.shields.io/badge/bcrypt-4A90E2?style=for-the-badge) | ![node-cron](https://img.shields.io/badge/Cron-FF9500?style=for-the-badge) |

</div>

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** v18.0.0 or higher
- **npm** v8.0.0 or higher  
- **MongoDB** v4.4 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zenpai6996/Spendly-backend.git
   cd Spendly-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the server**
   ```bash
   npm start
   ```

The API will be available at `http://localhost:3000/api/v1/`

## 📋 API Overview

<div align="center">

| **Category** | **Endpoints** | **Description** |
|:------------:|:-------------:|:---------------:|
| 🔐 **Auth** | 4 endpoints | User authentication & profile management |
| 📊 **Dashboard** | 1 endpoint | Financial overview & analytics |
| 💰 **Income** | 4 endpoints | Income tracking & management |
| 💸 **Expense** | 4 endpoints | Expense tracking & categorization |

</div>

**Quick API Reference:**

```http
POST   /api/v1/auth/register     # User registration
POST   /api/v1/auth/login        # User login
GET    /api/v1/dashboard         # Financial dashboard
POST   /api/v1/income/add        # Add income transaction
POST   /api/v1/expense/add       # Add expense transaction
```

> 📚 **[View Complete API Documentation →](./APIDOCS.md)**

## 🏗️ Project Structure

```
spendly-backend/
├── 📁 controllers/          # Request handlers
├── 📁 middleware/           # Custom middleware
├── 📁 models/              # Database schemas
├── 📁 routes/              # API routes
├── 📁 utils/               # Helper functions
├── 📄 server.js            # Application entry point
└── 📄 package.json         # Project dependencies
```





## 🤝 Contributing

Contributions are welcome ! Here's how you can help:

<div align="center">

[![Fork](https://img.shields.io/badge/Fork%20Repository-6366f1?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zenpai6996/Spendly-backend/fork)
[![Issues](https://img.shields.io/badge/Report%20Issues-ef4444?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zenpai6996/Spendly-backend/issues)
[![Pull Request](https://img.shields.io/badge/Create%20PR-10b981?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zenpai6996/Spendly-backend/pulls)

</div>

### 🧑‍💻 Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the license file for details.


<div align="center">
    <img src="https://capsule-render.vercel.app/api?type=waving&color=0:5433FF,50:20BDFF,100:A5FECB&height=120&section=footer&fontSize=42&fontColor=ffffff&animation=fadeIn" width="100%">
</div>

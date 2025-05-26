# 📚 Spendly API Documentation

<div align="center">

![API Version](https://img.shields.io/badge/API%20Version-v1.0-6366f1?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-10b981?style=for-the-badge)
![Format](https://img.shields.io/badge/Format-REST-f59e0b?style=for-the-badge)

*Complete API reference for Spendly Backend*

**Base URL:** `https://<your-deployment-domain>/api/v1/`

</div>

---

## 🔗 Quick Navigation

<table>
<tr>
<td width="25%">

### 🔐 Authentication
- [Register](#register)
- [Login](#login)
- [Get User](#get-user-info)
- [Upload Image](#upload-profile-image)

</td>
<td width="25%">

### 📊 Dashboard
- [Dashboard Data](#get-dashboard-data)

</td>
<td width="25%">

### 💰 Income
- [Add Income](#add-income)
- [Get Income](#get-all-income)
- [Delete Income](#delete-income)
- [Download Excel](#download-income-as-excel)

</td>
<td width="25%">

### 💸 Expense
- [Add Expense](#add-expense)
- [Get Expenses](#get-all-expenses)
- [Delete Expense](#delete-expense)
- [Download Excel](#download-expenses-as-excel)

</td>
</tr>
</table>

---

## 🛡️ Authentication

All endpoints (except registration and login) require authentication via JWT token in the `Authorization` header.

### Register

Create a new user account.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `POST /auth/register`

**Headers:**
```http
Content-Type: application/json
```

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword",
  "profileImageUrl": "https://example.com/image.jpg" // Optional
}
```

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `201 Created`
```json
{
  "id": "user_64f1e2b4c8d9a1b2c3d4e5f6",
  "user": {
    "fullName": "John Doe",
    "email": "john@example.com",
    "profileImageUrl": "https://example.com/image.jpg",
    "createdAt": "2025-05-26T10:30:00.000Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**
- `400 Bad Request` - All fields required
- `400 Bad Request` - Email already in use

</details>

---

### Login

Authenticate an existing user.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `POST /auth/login`

**Headers:**
```http
Content-Type: application/json
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
```json
{
  "id": "user_64f1e2b4c8d9a1b2c3d4e5f6",
  "user": {
    "fullName": "John Doe",
    "email": "john@example.com",
    "profileImageUrl": "https://example.com/image.jpg"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses:**
- `400 Bad Request` - Invalid credentials
- `400 Bad Request` - All fields required

</details>

---

### Get User Info

Retrieve current user information.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `GET /auth/getUser`

**Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
```json
{
  "id": "user_64f1e2b4c8d9a1b2c3d4e5f6",
  "fullName": "John Doe",
  "email": "john@example.com",
  "profileImageUrl": "https://example.com/image.jpg",
  "createdAt": "2025-05-26T10:30:00.000Z",
  "updatedAt": "2025-05-26T10:30:00.000Z"
}
```

**Error Responses:**
- `401 Unauthorized` - Invalid or missing token
- `404 Not Found` - User not found

</details>

---

### Upload Profile Image

Upload a profile image for the authenticated user.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `POST /auth/upload-image`

**Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data
```

**Request Body:**
```
Form data with image file
```

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
```json
{
  "message": "Image uploaded successfully",
  "imageUrl": "https://example.com/uploads/profile-123456.jpg"
}
```

**Error Responses:**
- `400 Bad Request` - No image file provided
- `401 Unauthorized` - Invalid or missing token

</details>

---

## 📊 Dashboard

### Get Dashboard Data

Retrieve comprehensive financial overview and analytics.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `GET /dashboard`

**Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
```json
{
  "totalBalance": 5000.00,
  "totalIncome": 8000.00,
  "totalExpense": 3000.00,
  "last30DaysExpenses": {
    "total": 1500.00,
    "transactions": [
      {
        "id": "exp_64f1e2b4c8d9a1b2c3d4e5f6",
        "icon": "🍔",
        "category": "Food",
        "amount": 25.50,
        "date": "2025-05-25T12:00:00.000Z"
      }
    ]
  },
  "last60DaysIncome": {
    "total": 4000.00,
    "transactions": [
      {
        "id": "inc_64f1e2b4c8d9a1b2c3d4e5f6",
        "icon": "💼",
        "source": "Salary",
        "amount": 3000.00,
        "date": "2025-05-01T09:00:00.000Z"
      }
    ]
  },
  "recentTransactions": [
    // Mixed income and expense transactions
  ]
}
```

**Error Responses:**
- `401 Unauthorized` - Invalid or missing token

</details>

---

## 💰 Income Management

### Add Income

Add a new income transaction.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `POST /income/add`

**Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Request Body:**
```json
{
  "icon": "💼",
  "source": "Salary",
  "amount": 5000.00,
  "date": "2025-05-01"
}
```

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
```json
{
  "id": "inc_64f1e2b4c8d9a1b2c3d4e5f6",
  "icon": "💼",
  "source": "Salary",
  "amount": 5000.00,
  "date": "2025-05-01T00:00:00.000Z",
  "userId": "user_64f1e2b4c8d9a1b2c3d4e5f6",
  "createdAt": "2025-05-26T10:30:00.000Z"
}
```

**Error Responses:**
- `400 Bad Request` - Missing required fields
- `401 Unauthorized` - Invalid or missing token

</details>

---

### Get All Income

Retrieve all income transactions for the authenticated user.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `GET /income/get`

**Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
```json
[
  {
    "id": "inc_64f1e2b4c8d9a1b2c3d4e5f6",
    "icon": "💼",
    "source": "Salary",
    "amount": 5000.00,
    "date": "2025-05-01T00:00:00.000Z",
    "createdAt": "2025-05-26T10:30:00.000Z"
  },
  {
    "id": "inc_64f1e2b4c8d9a1b2c3d4e5f7",
    "icon": "💰",
    "source": "Freelance",
    "amount": 1500.00,
    "date": "2025-05-15T00:00:00.000Z",
    "createdAt": "2025-05-26T10:35:00.000Z"
  }
]
```

**Error Responses:**
- `401 Unauthorized` - Invalid or missing token

</details>

---

### Delete Income

Delete a specific income transaction.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `DELETE /income/:incomeId`

**Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

**Path Parameters:**
- `incomeId` - The ID of the income transaction to delete

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
```json
{
  "message": "Income Deleted Successfully"
}
```

**Error Responses:**
- `401 Unauthorized` - Invalid or missing token
- `404 Not Found` - Income transaction not found

</details>

---

### Download Income as Excel

Download all income transactions as an Excel file.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `GET /income/downloadexcel`

**Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
- Content-Type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- File download with name: `income-report-YYYY-MM-DD.xlsx`

**Error Responses:**
- `401 Unauthorized` - Invalid or missing token

</details>

---

## 💸 Expense Management

### Add Expense

Add a new expense transaction.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `POST /expense/add`

**Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

**Request Body:**
```json
{
  "icon": "🍔",
  "category": "Food",
  "amount": 25.50,
  "date": "2025-05-01"
}
```

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
```json
{
  "id": "exp_64f1e2b4c8d9a1b2c3d4e5f6",
  "icon": "🍔",
  "category": "Food",
  "amount": 25.50,
  "date": "2025-05-01T00:00:00.000Z",
  "userId": "user_64f1e2b4c8d9a1b2c3d4e5f6",
  "createdAt": "2025-05-26T10:30:00.000Z"
}
```

**Error Responses:**
- `400 Bad Request` - Missing required fields
- `401 Unauthorized` - Invalid or missing token

</details>

---

### Get All Expenses

Retrieve all expense transactions for the authenticated user.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `GET /expense/get`

**Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
```json
[
  {
    "id": "exp_64f1e2b4c8d9a1b2c3d4e5f6",
    "icon": "🍔",
    "category": "Food",
    "amount": 25.50,
    "date": "2025-05-01T00:00:00.000Z",
    "createdAt": "2025-05-26T10:30:00.000Z"
  },
  {
    "id": "exp_64f1e2b4c8d9a1b2c3d4e5f7",
    "icon": "🚗",
    "category": "Transportation",
    "amount": 45.00,
    "date": "2025-05-02T00:00:00.000Z",
    "createdAt": "2025-05-26T10:35:00.000Z"
  }
]
```

**Error Responses:**
- `401 Unauthorized` - Invalid or missing token

</details>

---

### Delete Expense

Delete a specific expense transaction.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `DELETE /expense/:expenseId`

**Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

**Path Parameters:**
- `expenseId` - The ID of the expense transaction to delete

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
```json
{
  "message": "Expense Deleted Successfully"
}
```

**Error Responses:**
- `401 Unauthorized` - Invalid or missing token
- `404 Not Found` - Expense transaction not found

</details>

---

### Download Expenses as Excel

Download all expense transactions as an Excel file.

<details>
<summary><strong>📤 Request Details</strong></summary>

**Endpoint:** `GET /expense/downloadexcel`

**Headers:**
```http
Authorization: Bearer <JWT_TOKEN>
```

</details>

<details>
<summary><strong>📥 Response Details</strong></summary>

**Success Response:** `200 OK`
- Content-Type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- File download with name: `expenses-report-YYYY-MM-DD.xlsx`

**Error Responses:**
- `401 Unauthorized` - Invalid or missing token

</details>

---

## 🔧 HTTP Status Codes

<div align="center">

| **Code** | **Status** | **Description** |
|:--------:|:----------:|:----------------|
| ![200](https://img.shields.io/badge/200-OK-10b981?style=flat-square) | **Success** | Request completed successfully |
| ![201](https://img.shields.io/badge/201-Created-06b6d4?style=flat-square) | **Created** | Resource created successfully |
| ![400](https://img.shields.io/badge/400-Bad%20Request-f59e0b?style=flat-square) | **Client Error** | Invalid request data |
| ![401](https://img.shields.io/badge/401-Unauthorized-ef4444?style=flat-square) | **Auth Error** | Invalid or missing authentication |
| ![404](https://img.shields.io/badge/404-Not%20Found-8b5cf6?style=flat-square) | **Not Found** | Resource not found |
| ![500](https://img.shields.io/badge/500-Server%20Error-dc2626?style=flat-square) | **Server Error** | Internal server error |

</div>

---

## 📝 Implementation Notes

### Date Format
All dates should be provided in ISO 8601 format (`YYYY-MM-DD` or `YYYY-MM-DDTHH:mm:ss.sssZ`).

### Authentication
Include the JWT token in the `Authorization` header for all protected endpoints:
```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### File Uploads
Profile image uploads support common image formats (JPEG, PNG, GIF) with a maximum file size of 5MB.

### Excel Downloads
Downloaded Excel files contain formatted data with appropriate headers and styling for easy analysis.

---

## 🚀 Code Examples

### JavaScript/Fetch
```javascript
// Login example
const response = await fetch('https://your-domain.com/api/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'yourpassword'
  })
});

const { token, user } = await response.json();

// Add expense with authentication
const expenseResponse = await fetch('https://your-domain.com/api/v1/expense/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    icon: '🍔',
    category: 'Food',
    amount: 25.50,
    date: '2025-05-26'
  })
});
```

### Python/Requests
```python
import requests

# Login
login_data = {
    "email": "john@example.com",
    "password": "yourpassword"
}

response = requests.post(
    "https://your-domain.com/api/v1/auth/login",
    json=login_data
)

token = response.json()["token"]

# Add income with authentication
headers = {"Authorization": f"Bearer {token}"}
income_data = {
    "icon": "💼",
    "source": "Salary",
    "amount": 5000.00,
    "date": "2025-05-01"
}

income_response = requests.post(
    "https://your-domain.com/api/v1/income/add",
    json=income_data,
    headers=headers
)
```

---

<div align="center">

**Need help?** [Open an issue](https://github.com/zenpai6996/Spendly-backend/issues) • [View Source Code](https://github.com/zenpai6996/Spendly-backend)

**[⬅️ Back to Main README](README.md)**

</div>
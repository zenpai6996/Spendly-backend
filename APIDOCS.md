# 📚 Spendly Backend API Documentation

Welcome to the Spendly Backend API!  
Below you'll find detailed documentation for all available endpoints.  
**Base URL:** `https://<your-deployment-domain>/api/v1/`

---

## 🛡️ Authentication

### Register

- **Endpoint:** `POST /auth/register`
- **Body:**
{
"fullName": "John Doe",
"email": "john@example.com",
"password": "yourpassword",
"profileImageUrl": "optional-url"
}


- **Response:**  
`201 Created`
{
"id": "user_id",
"user": { ...userObject },
"token": "JWT_TOKEN"
}


- **Errors:**  
`400` All fields required / Email already in use

---

### Login

- **Endpoint:** `POST /auth/login`
- **Body:**
{
"email": "john@example.com",
"password": "yourpassword"
}


- **Response:**  
`200 OK`
{
"id": "user_id",
"user": { ...userObject },
"token": "JWT_TOKEN"
}


- **Errors:**  
`400` Invalid credentials / All fields required

---

### Get User Info

- **Endpoint:** `GET /auth/getUser`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Response:**  
`200 OK`
{
"fullName": "John Doe",
"email": "john@example.com",
"profileImageUrl": "url",
...
}


- **Errors:**  
`404` User not found

---

### Upload Profile Image

- **Endpoint:** `POST /auth/upload-image`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
`multipart/form-data` with image file
- **Response:**  
`200 OK` with uploaded image URL

---

## 📊 Dashboard

### Get Dashboard Data

- **Endpoint:** `GET /dashboard`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Response:**  
{
"totalBalance": 5000,
"totalIncome": 8000,
"totalExpense": 3000,
"last30DaysExpenses": {
"total": 1500,
"transaction": [ ... ]
},
"last60DaysIncome": {
"total": 4000,
"transaction": [ ... ]
},
"recentTransactions": [ ... ]
}



---

## 💰 Income

### Add Income

- **Endpoint:** `POST /income/add`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Body:**
{
"icon": "💼",
"source": "Salary",
"amount": 5000,
"date": "2025-05-01"
}


- **Response:**  
`200 OK` with created income object

---

### Get All Income

- **Endpoint:** `GET /income/get`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Response:**  
`200 OK`  
Array of income objects

---

### Delete Income

- **Endpoint:** `DELETE /income/:incomeId`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Response:**  
`200 OK`  
`{ "message": "Income Deleted Successfully" }`

---

### Download Income as Excel

- **Endpoint:** `GET /income/downloadexcel`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Response:**  
Download of `.xlsx` file

---

## 💸 Expense

### Add Expense

- **Endpoint:** `POST /expense/add`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Body:**
{
"icon": "🍔",
"category": "Food",
"amount": 100,
"date": "2025-05-01"
}

text
- **Response:**  
`200 OK` with created expense object

---

### Get All Expenses

- **Endpoint:** `GET /expense/get`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Response:**  
`200 OK`  
Array of expense objects

---

### Delete Expense

- **Endpoint:** `DELETE /expense/:expenseId`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Response:**  
`200 OK`  
`{ "message": "Expense Deleted Successfully" }`

---

### Download Expenses as Excel

- **Endpoint:** `GET /expense/downloadexcel`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Response:**  
Download of `.xlsx` file

---

## 🖼️ Image Upload

- **Endpoint:** `POST /auth/upload-image`
- **Headers:**  
`Authorization: Bearer <JWT_TOKEN>`
- **Body:**  
`multipart/form-data` with image file
- **Response:**  
`200 OK` with uploaded image URL

---

## ⚠️ Error Codes

| Code | Meaning                       |
|------|-------------------------------|
| 200  | Success                       |
| 201  | Created                       |
| 400  | Bad Request                   |
| 401  | Unauthorized / Invalid Token  |
| 404  | Not Found                     |
| 500  | Internal Server Error         |

---

## 📝 Notes

- All endpoints (except register/login) require a valid JWT token in the `Authorization` header.
- Dates should be in ISO format (`YYYY-MM-DD`).
- Download endpoints return Excel files with your data.

---

**[⬅️ Back to Main README](./README.md)**

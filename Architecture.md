# E-Commerce Website - Technical Architecture
**Project:** Diligent Internship 2025  
**Author:** Ajay (CMRIT)

## 1. Overview

This document outlines the technical architecture for a minimal, full-stack E-Commerce website. The system is built using the **MERN stack** (MongoDB, Express, React, Node.js) and is designed to be a lightweight, modern web application.

The primary goal is to create a functional application that allows users to browse products, view product details, and manage a shopping cart.

## 2. System Architecture (High-Level)

The application follows a classic **Client-Server Architecture**.

```
[User] --> [Browser (React Client)] <--> [REST API (Node/Express)] <--> [Database (MongoDB Atlas)]
```

* **Client (Frontend):** A React.js single-page application (SPA) that runs in the user's browser. It is responsible for all UI rendering and state management.
* **Server (Backend):** A Node.js and Express.js RESTful API server. It handles business logic, interacts with the database, and serves JSON data to the client.
* **Database (DB):** A MongoDB Atlas cloud database (NoSQL) that stores application data, specifically product information and user cart data.

---

## 3. Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | **React.js** | (View Library) For building the user interface with components. |
| | **React Router** | (Routing) For client-side navigation between pages. |
| | **React Context API**| (State) For managing global cart state across components. |
| | **Axios / Fetch API** | (HTTP) For making API calls to the backend. |
| **Backend** | **Node.js** | (Runtime) JavaScript runtime for the server. |
| | **Express.js** | (Framework) Web framework for Node.js to build the REST API. |
| | **Mongoose** | (ODM) Object Data Modeling library for MongoDB. |
| | **CORS** | (Middleware) To allow cross-origin requests from the React frontend. |
| **Database** | **MongoDB Atlas** | (DB) Managed NoSQL cloud database service. |

---

## 4. Folder Structure

The project is organized into two main repositories:

```
/frontend    <- React Client
/backend     <- Express Server
```

---

## 5. API Endpoints (RESTful API)

The backend exposes the following RESTful endpoints.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/products` | Fetches a list of all available products. |
| `GET` | `/products/:id` | Fetches the details for a single product by its ID. |
| `POST` | `/cart` | Adds a product (with quantity) to the cart. |
| `DELETE` | `/cart/:id` | Removes a product from the cart by its item ID. |

---

## 6. Database Schema

The database will use two main collections:

#### `products` Collection
* `name` (String, Required)
* `price` (Number, Required)
* `description` (String, Required)
* `imageURL` (String)

**Example Document:**
```json
{
  "_id": "60c72b...",
  "name": "AI-Powered Laptop",
  "price": 1299.99,
  "description": "A sleek laptop with an integrated AI assistant.",
  "imageURL": "[http://example.com/image.png](http://example.com/image.png)"
}
```

#### `cart` Collection (or `cartItems`)
* `productId` (ObjectId, Ref: 'Product', Required)
* `quantity` (Number, Required, Default: 1)
* `userId` (String) - *Note: For this minimal project, we'll manage cart on the client. For a full build, we would link this to a user.*

**Note:** For the internship project, cart state is managed in the frontend (React Context) to maintain session state without user authentication. A database-backed cart would be the next step for persistent, multi-device carts.

---

## 7. State Management (Frontend)

**React Context API** is used for global state management.

* **`CartContext`:** A global context is created to hold the `cartItems` array.
* **`CartProvider`:** This component wraps the application and provides the cart state and functions (`addToCart`, `removeFromCart`) to all child components.
* **`useCart()` Hook:** A custom hook is used to allow any component (e.g., `ProductCard`, `ShoppingCartPage`) to easily access and modify the cart state.
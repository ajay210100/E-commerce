# E-Commerce Project: AI-Assisted Prompts
**Project:** Diligent Internship 2025

This document lists the prompts used to generate the components and logic for the full-stack e-commerce application.

### 1. Backend (Node.js & Express)

1.  **Server Setup:**
    > "Create a `server.js` file using Node.js and Express. It should include `cors`, `express.json()` middleware, and connect to a MongoDB Atlas database using Mongoose. The MONGO_URI should come from a `.env` file. Have it listen on port 5001."

2.  **Mongoose Schemas:**
    > "Generate a Mongoose schema for a 'Product' in a file named `models/Product.js`. It needs fields for `name` (String), `price` (Number), `description` (String), and `imageURL` (String). All fields should be required."
    >
    > "Generate a Mongoose schema for a 'CartItem' in `models/CartItem.js`. It needs `productId` (as an ObjectId referencing 'Product') and `quantity` (Number)."

3.  **API Routes (Products):**
    > "Create an Express router file `routes/products.js`. Add a 'GET /' route that returns all products from the 'Product' collection. Also add a 'GET /:id' route that finds one product by its `req.params.id`."

4.  **API Routes (Cart):**
    > "Create an Express router file `routes/cart.js`. Add a 'POST /' route to add an item to the cart and a 'DELETE /:id' route to remove an item by its ID."

### 2. Frontend (React)

1.  **Initial Setup:**
    > "Set up a new React application named 'frontend'. After creation, install `react-router-dom` and `axios`."

2.  **Routing:**
    > "In `App.js`, set up React Router (BrowserRouter) with three routes:
    > * `/` (ProductListingPage)
    > * `/product/:id` (ProductDetailsPage)
    > * `/cart` (ShoppingCartPage)
    > Also include a 'Navbar' component that should be visible on all pages."

3.  **State Management (Context API):**
    > "Create a new file `context/CartContext.js`.
    > 1.  Create a `CartContext`.
    > 2.  Create a `CartProvider` component that manages a `cartItems` state (an array).
    > 3.  Expose functions `addToCart(product)` and `removeFromCart(productId)`.
    > 4.  The `addToCart` function should check if the item already exists and just increase the quantity if it does.
    > 5.  Create a `useCart()` custom hook to easily consume the context."
    > 6.  Wrap the `<Router>` in `App.js` with the `CartProvider`."

4.  **Component Generation (Pages):**
    > "Generate the `ProductListingPage` component. It should:
    > 1.  Use `useState` to hold `products` and `loading` state.
    > 2.  Use `useEffect` to fetch data from the `http://localhost:5001/products` API on component mount.
    > 3.  Render the list of products. Each product should be a `ProductCard`."

5.  **Component Generation (Logic):**
    > "Create a `ProductCard` component. It should:
    > 1.  Accept a `product` object as a prop.
    > 2.  Display the product's image, name, and price.
    > 3.  Include a 'View Details' button (as a React Router `<Link>`).
    > 4.  Include an 'Add to Cart' button.
    > 5.  On click, this button should call the `addToCart` function from the `useCart()` hook."

6.  **Cart Page:**
    > "Create the `ShoppingCartPage` component.
    > 1.  Use the `useCart()` hook to get the `cartItems` array.
    > 2.  Map over the array and display each item's name, price, quantity.
    > 3.  Include a 'Remove' button for each item that calls `removeFromCart` with the item's ID.
    > 4.  Display the total price of the cart."
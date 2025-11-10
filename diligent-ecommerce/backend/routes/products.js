const router = require('express').Router();
const Product = require('../models/Product'); // Mongoose model

// Mock data (for development speed, can be replaced by DB queries)
const mockProducts = [
  { _id: '1', name: 'AI-Powered Laptop', price: 1299.99, description: 'A sleek laptop with an integrated AI assistant.', imageURL: 'https://via.placeholder.com/300' },
  { _id: '2', name: 'Smart VR Headset', price: 499.99, description: 'Immersive virtual reality with gesture control.', imageURL: 'https://via.placeholder.com/300' },
  { _id: '3', name: 'Quantum Mouse', price: 89.99, description: 'A mouse with 1ms response time.', imageURL: 'https://via.placeholder.com/300' }
];

// GET /products - Fetch all products
router.get('/', async (req, res) => {
  try {
    // DB version: const products = await Product.find();
    // res.json(products);
    
    // Mock version:
    res.json(mockProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /products/:id - Get details of a single product
router.get('/:id', async (req, res) => {
  try {
    // DB version: const product = await Product.findById(req.params.id);
    // res.json(product);

    // Mock version:
    const product = mockProducts.find(p => p._id === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
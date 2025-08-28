// backend/routes/products.js
import express from 'express';
import { db } from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {

        const query = `SELECT * FROM product_editing`;
        const [result] = await db.query(query);

        res.status(200).json({ data: result });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: error.message });
    }
});




// POST API
router.post('/', async (req, res) => {
    try {
        const { product_name, category, price } = req.body;


        const query = 'INSERT INTO product_editing (product_name, category, price) VALUES (?, ?, ?)';
        const [result] = await db.query(query, [product_name, category, price]);

        res.json({ message: 'Product inserted!', id: result.insertId });

    } catch (error) {
        console.error("Error Inserting products:", error);
        res.status(500).json({ error: error.message });
    }
})





export default router;

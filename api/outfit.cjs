const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Mock data for outfits
const mockOutfits = [
    {
        id: 1,
        top: {
            id: 1,
            name: 'T-Shirt',
            color: 'blue',
        },
        bottom: {
            id: 1,
            name: 'Jeans',
            color: 'black',
        },
        shoes: {
            id: 1,
            name: 'Sneakers',
            color: 'white',
        },
    },
    {
        id: 2,
        top: {
            id: 2,
            name: 'Shirt',
            color: 'white',
        },
        bottom: {
            id: 2,
            name: 'Chinos',
            color: 'beige',
        },
        shoes: {
            id: 2,
            name: 'Loafers',
            color: 'brown',
        },
    },
];

router.get('/', async (req, res) => {
    try {
        // Return mock outfits instead of querying the database
        res.json({ success: true, outfits: mockOutfits });
    } catch (error) {
        console.error('Error during outfit fetch:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;

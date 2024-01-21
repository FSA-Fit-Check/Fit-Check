const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Mock data for outfits
const mockOutfits = [
    {
        garmentType: "top",
        image: "../images/top1.jpg",
        weather: "42",
        color: "blue",
        gender: "male",
        occasion: "wedding",
    },
    {
        garmentType: "bottom",
        image: "../images/bottom1.jpg",
        weather: "30",
        color: "black",
        gender: "female",
        occasion: "casual",
    },
    {
        garmentType: "shoes",
        image: "../images/shoes1.jpg",
        weather: "25",
        color: "white",
        gender: "unisex",
        occasion: "formal",
    },
];

router.get('/', async (req, res) => {
    try {
        const { weather, gender } = req.query;

        if (weather && gender) {
            // Filter mock outfits based on weather and gender
            // Weather is a range of 10 degrees
            // mockOutfits eventually will be replaced with prisma query
            const filteredOutfits = mockOutfits.filter(outfit =>
                parseInt(outfit.weather) >= (parseInt(weather) - 5) &&
                parseInt(outfit.weather) <= (parseInt(weather) + 5) &&
                outfit.gender === gender
            );

            res.json({ success: true, outfits: filteredOutfits });
        } else {
            // If weather and gender parameters are not provided, return all mock outfits
            res.json({ success: true, outfits: mockOutfits });
        }
    } catch (error) {
        console.error('Error during outfit fetch:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;

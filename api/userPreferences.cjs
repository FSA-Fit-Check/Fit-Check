const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



router.post('/', async (req, res) => {
    
    try {
        const userPreferences = await prisma.clothing_Item.findMany({
            where: {
                garmentType: req.body.garmentType,
                weatherCompatibility: req.body.weatherCompatibility,
                styleType: req.body.styleType,
                color: req.body.color,
                occasion: req.body.occasion,
                gender: req.body.gender,
            }
        });

        res.json({ success: true, data: userPreferences });

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router;

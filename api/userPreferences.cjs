const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    
    try {
        const forMenValue = req.body.gender.toLowerCase() === "yes";
        const userPreferences = await prisma.clothing_Item.findMany({
            where: {
                garment_type: req.body.garmentType,
                weather_compatability: req.body.weatherCompatibility,
                style_type: req.body.styleType,
                color: req.body.color,
                occasion: req.body.occasion,
                forMen: forMenValue
            }
        });

        res.json({ success: true, data: userPreferences });

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router;

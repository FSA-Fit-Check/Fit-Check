const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async(req, res) => {
  res.send("Needs to be a POST request, not a GET request!");
});

router.post('/', async (req, res) => {
    
    try {
        const userPreferences = await prisma.clothing_Item.findMany({
            // Each preference is conditional.
            where: {
                ...(req.body.garmentType !== "" && req.body.garmentType !== "choose" ? 
                    {garment_type: req.body.garmentType} : {}),
                ...(req.body.weatherCompatibility !== "" && req.body.weatherCompatibility !== "choose" ? 
                    {weather_compatability: req.body.weatherCompatibility} : {}),
                ...(req.body.styleType !== "" && req.body.styleType !== "choose" ? 
                    {style_type: req.body.styleType} : {}),
                ...(req.body.color !== "" && req.body.color !== "choose" ? 
                    {color: req.body.color} : {}),
                ...(req.body.occasion !== "" && req.body.occasion !== "choose" ? 
                    {occasion: req.body.occasion} : {}),
                ...(req.body.forMen ? 
                    {forMen: req.body.forMen} : {})
            }
        });

        res.json({ success: true, data: userPreferences });

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router;

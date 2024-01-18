const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./api/login.cjs');
const registerRoute = require('./api/register.cjs');
const cors = require('cors');
const UserPrefForm = require('./src/components/userPreferences.jsx');

const app = express();
const port = 3000;

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(bodyParser.json());

app.use('/login', loginRoute)
app.use('/register', registerRoute)

app.get('/UserPrefForm', async (req, res) => {
  try {
    
    const UserPrefForm = await prisma.clothing_Item.find({
      where: {
          garmentType: req.query.garment_type, 
          weatherCompatibility: req.query.weather_compatibility, 
          styleType: req.query.style_type, 
          color: req.query.color, 
          occasion: req.query.occasion,
          gender: req.query.forMen
      }
    });
  
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
  res.json({ success: true, data: UserPrefForm });

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// server.cjs

const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./api/login.cjs');
const registerRoute = require('./api/register.cjs');
const garmentRoute = require('./api/garments.cjs');
const cors = require('cors');
const UserPrefForm = require('./api/userPreferences.cjs');
<<<<<<< HEAD
const garmentUploadRoute = require('./api/garmentUpload.cjs');
=======
const favoritesRoute = require('./api/favorites.cjs')
>>>>>>> 9f6f90b (added code to connect login and userid info to relevant files.)

const app = express();
const port = 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204, // for preflight requests
}));


app.use(bodyParser.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/userprefform', UserPrefForm);
<<<<<<< HEAD
app.use('/garments', garmentRoute);
app.use('/garment_upload', garmentUploadRoute);
=======
app.use('/garments', garmentRoute)
app.use('/favorites', favoritesRoute);
>>>>>>> 9f6f90b (added code to connect login and userid info to relevant files.)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
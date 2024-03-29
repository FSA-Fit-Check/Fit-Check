// server.cjs

const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./api/login.cjs');
const registerRoute = require('./api/register.cjs');
const garmentRoute = require('./api/garments.cjs');
const cors = require('cors');
const UserPrefForm = require('./api/userPreferences.cjs');
const garmentUploadRoute = require('./api/garmentUpload.cjs');
const favoritesRoute = require('./api/favorites.cjs')
const outfitsRoute = require('./api/outfits.cjs')
const outfitUploadRoute = require('./api/outfitUpload.cjs')
const userRouter = require('./api/user.cjs')
const viteExpress = require('vite-express');


const app = express();
const port = 3000;

// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204, // for preflight requests
// }));


app.use(bodyParser.json());

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/userprefform', UserPrefForm);
app.use('/garments', garmentRoute);
app.use('/garment_upload', garmentUploadRoute);
app.use('/favorites', favoritesRoute);
app.use('/outfits', outfitsRoute);
app.use('/outfitUpload', outfitUploadRoute);
app.use('/me', userRouter);

viteExpress.listen(app, port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
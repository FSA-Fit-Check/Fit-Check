const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get('/', async(req, res, next) => {
const token = req.headers.authorization
console.log(token);
try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).send({user})
} catch (error) {
    console.error(error)
}

}) 


module.exports = router;
const express = require('express');
const router2 = express.Router();

router2.get('/prod', (req, res) => {
    res.send('klo');
});

module.exports = router2;
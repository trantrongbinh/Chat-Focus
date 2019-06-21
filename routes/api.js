const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf();
router.use(csrfProtection);

/* hello */
router.get('/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

module.exports = router;

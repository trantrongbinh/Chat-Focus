const express = require('express');
const router = express.Router();

/* home */
router.get('/', (req, res) => {
    res.send({ express: 'Bkfa System Chat' });
});

module.exports = router;

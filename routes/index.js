const express = require('express');
const router = express.Router();

/* home */
router.get('/', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

module.exports = router;

const express = require('express');
const router = express.Router();

// const csrf = require('csurf');
// const csrfProtection = csrf();
// router.use(csrfProtection);

router.use(require("../middleware/jwtMiddleware")());
/* controllers */
const users = require('../controllers/users');

/* register */
router.post('/user/register', users.register);

module.exports = router;
